/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/


import math = require("mathjs");
import { Point } from "./geometry";
import { RealMatrix } from "./matrix";

type GraphEdge<T> = {
    source: T,
    target: T;
};

export class SpectralLayout<T> {
    constructor(private nodes: T[], private edges: GraphEdge<T>[]) { }

    calculate(): Point[] {
        // calculate adjacency matrix
        const A = RealMatrix.zeros(this.nodes.length, this.nodes.length);
        this.edges.forEach(edge => {
            const sourceIndex = this.nodes.indexOf(edge.source);
            const targetIndex = this.nodes.indexOf(edge.target);
            A.set(sourceIndex, targetIndex, 1);
            A.set(targetIndex, sourceIndex, 1);
        });

        // calculate node degrees
        const D = RealMatrix.diag(A.rowSum());

        // calculate graph Laplacian
        const L = D.minus(A);

        // perform eigenvalue decomposition
        const eigenresult = math.eigs(math.matrix(L.toArray()), 1e-15);
        const values = (eigenresult.values as math.Matrix).toArray() as number[];

        // find eigenvectors belonging to second and third smallest nonzero eigenvalues,
        // which if used as coordinates provide a good distribution of graph nodes
        const index = values.findIndex(value => value > 1e-15);
        const U = eigenresult.vectors;
        const x = (math.squeeze(math.column(U, index)) as math.Matrix).toArray() as number[];
        const y = (math.squeeze(math.column(U, index + 1)) as math.Matrix).toArray() as number[];

        // rescale to unit range
        const minX = math.min(x);
        const maxX = math.max(x);
        const minY = math.min(y);
        const maxY = math.max(y);

        const points: Point[] = Array(this.nodes.length);
        for (let k = 0; k < this.nodes.length; ++k) {
            points[k] = new Point(
                (x[k]! - minX) / (maxX - minX),
                (y[k]! - minY) / (maxY - minY)
            );
        }
        return points;
    }
}
