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

type GraphEdge<T> = {
    source: T,
    target: T;
};

function rowsum(matrix: math.Matrix): number[] {
    const rows: number = math.size(matrix).valueOf()[0];
    const result: number[] = Array(rows).fill(0);
    for (let k = 0; k < rows; ++k) {
        result[k] = math.sum(math.row(matrix, k));
    }
    return result;
}

export class SpectralLayout<T> {
    constructor(private nodes: T[], private edges: GraphEdge<T>[]) { }

    calculate(): Point[] {
        // calculate adjacency matrix
        let A = math.zeros(this.nodes.length, this.nodes.length) as math.Matrix;
        this.edges.forEach(edge => {
            if (edge.source !== edge.target) {
                const sourceIndex = this.nodes.indexOf(edge.source);
                const targetIndex = this.nodes.indexOf(edge.target);
                A = math.subset(A, math.index(sourceIndex, targetIndex), 1);
                A = math.subset(A, math.index(targetIndex, sourceIndex), 1);
            }
        });

        // calculate node degrees
        const D = math.diag(rowsum(A));

        // calculate graph Laplacian
        const L = math.subtract(D, A) as math.Matrix;

        // perform eigenvalue decomposition
        const eigenresult = math.eigs(L, 1e-15);
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
