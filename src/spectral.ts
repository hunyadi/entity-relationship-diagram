/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/


import { Vector } from "./geometry";
import { Jacobi, RealMatrix, sortedIndexArray } from "./matrix";

type GraphEdge<T> = {
    source: T,
    target: T;
};

export class SpectralLayout<T> {
    constructor(private nodes: T[], private edges: GraphEdge<T>[]) { }

    calculate(): Vector[] {
        // calculate adjacency matrix
        const A = RealMatrix.zeros(this.nodes.length, this.nodes.length);
        this.edges.forEach(edge => {
            const sourceIndex = this.nodes.indexOf(edge.source);
            const targetIndex = this.nodes.indexOf(edge.target);
            A.set(sourceIndex, targetIndex, 1);
            A.set(targetIndex, sourceIndex, 1);
        });

        // calculate graph Laplacian
        const L = RealMatrix.diag(A.rowSum()).minus(A);

        // perform eigenvalue decomposition
        const jacobi = new Jacobi(L).run();
        const eigenvalues = jacobi.eigenvalues;

        // find eigenvectors belonging to first and second smallest nonzero eigenvalues,
        // which if used as coordinates provide a good distribution of graph nodes
        const order = sortedIndexArray(eigenvalues);
        let index = 0;
        while (eigenvalues[order[index]!]! < 1e-6) {
            ++index;
        }
        const U = jacobi.eigenvectors;
        const positions = Vector.combine(
            U[order[index]!]!.toArray(),
            U[order[index + 1]!]!.toArray()
        );

        const minimumDistance = 0.1;

        // find co-located items
        for (let i = 0; i < this.nodes.length; ++i) {
            const source = positions[i]!;
            const colocated = new Set<number>();
            colocated.add(i);

            for (let j = i + 1; j < this.nodes.length; ++j) {
                const target = positions[j]!;
                const distance = target.minus(source).magnitude();
                if (distance < 1e-8) {
                    colocated.add(j);
                }
            }

            // more than one item occupies the same position
            if (colocated.size > 1) {
                // make space at location where co-located items are
                for (let k = 0; k < this.nodes.length; ++k) {
                    if (!colocated.has(k)) {
                        const dir = positions[k]!.minus(source).normalize().multiply(2 * minimumDistance);
                        positions[k]!.add(dir);
                    }
                }

                // arrange co-located items in a circle
                const n = colocated.size;
                for (let [k, index] of colocated.entries()) {
                    const dir = new Vector(Math.cos(index * 2 * Math.PI / n), Math.sin(index * 2 * Math.PI / n)).multiply(minimumDistance);
                    positions[k]!.add(dir);
                }
            }
        }

        // find small distance between items
        for (let i = 0; i < this.nodes.length; ++i) {
            const source = positions[i]!;
            for (let j = i + 1; j < this.nodes.length; ++j) {
                const target = positions[j]!;
                const distance = target.minus(source).magnitude();

                if (distance < minimumDistance) {
                    // push items apart that are too close to each other
                    const mid = source.plus(target).multiply(0.5);
                    for (let k = 0; k < this.nodes.length; ++k) {
                        positions[k]!.add(positions[k]!.minus(mid).normalize().multiply(minimumDistance));
                    }
                }
            }
        }

        // rescale to unit range
        return Vector.rescale(positions);
    }
}
