/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

/** A point in 2-dimensional space. */
export interface Coordinate {
    readonly x: number;
    readonly y: number;
}

export class Point implements Coordinate {
    constructor(public x: number, public y: number) { }

    static combine(x: number[], y: number[]): Point[] {
        if (x.length != y.length) {
            throw RangeError("input array size mismatch");
        }

        const points: Point[] = new Array(x.length);
        const len = x.length;
        for (let k = 0; k < len; ++k) {
            points[k] = new Point(x[k]!, y[k]!);
        }
        return points;
    }
}

export class Vector implements Coordinate {
    constructor(public x: number, public y: number) { }

    static from(p: Coordinate): Vector {
        return new Vector(p.x, p.y);
    }

    /** A list of vectors constructed from corresponding x and y coordinate pairs. */
    static combine(x: number[], y: number[]): Vector[] {
        if (x.length != y.length) {
            throw RangeError("input array size mismatch");
        }

        const vectors = [];
        const len = x.length;
        for (let k = 0; k < len; ++k) {
            vectors.push(new Vector(x[k]!, y[k]!));
        }
        return vectors;
    }

    /** The mean vector produced by averaging a list of vectors. */
    static mean(vectors: Vector[]): Vector {
        const sum = vectors.reduce((prev, cur) => prev.add(cur), new Vector(0, 0));
        return sum.divide(vectors.length);
    }

    /** Shifts vectors and proportionally scales coordinates such that all vectors fit into a unit square. */
    static rescale(vectors: Vector[]): Vector[] {
        if (vectors.length > 0) {
            const vector = vectors[0]!;
            const minX = vectors.reduce((prev, v) => Math.min(prev, v.x), vector.x);
            const maxX = vectors.reduce((prev, v) => Math.max(prev, v.x), vector.x);
            const minY = vectors.reduce((prev, v) => Math.min(prev, v.y), vector.y);
            const maxY = vectors.reduce((prev, v) => Math.max(prev, v.y), vector.y);

            return vectors.map(v => {
                return new Vector(
                    (v.x - minX) / (maxX - minX),
                    (v.y - minY) / (maxY - minY)
                );
            });
        } else {
            return [];
        }
    }

    /** The length of the vector. */
    magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /** A vector with equal length but opposite direction. */
    reversed(): Vector {
        return new Vector(-this.x, -this.y);
    }

    /** Returns the sum of two vectors. */
    plus(op: Readonly<Vector>): Vector {
        return new Vector(this.x + op.x, this.y + op.y);
    }

    /** Returns the difference of two vectors. */
    minus(op: Readonly<Vector>): Vector {
        return new Vector(this.x - op.x, this.y - op.y);
    }

    /** Returns a new vector with a magnitude multiplied by the given scalar. */
    times(scalar: number): Vector {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    /** Converts a degenerate vector to the zero vector. Mutates the original vector. */
    canonicalize(): Vector {
        const len = this.magnitude();
        if (len !== len) {  // is not a number (NaN)
            this.x = 0;
            this.y = 0;
        }
        return this;
    }

    /** Normalizes a vector to a unit length. Mutates the original vector. */
    normalize(): Vector {
        const len = this.magnitude();
        if (!len) {  // zero or not a number (NaN)
            this.x = 0;
            this.y = 0;
        } else {
            this.x /= len;
            this.y /= len;
        }
        return this;
    }

    /** Adds a vector to this vector. Mutates the original vector. */
    add(op: Readonly<Vector>): Vector {
        this.x += op.x;
        this.y += op.y;
        return this;
    }

    /** Subtracts a vector from this vector. Mutates the original vector. */
    subtract(op: Readonly<Vector>): Vector {
        this.x -= op.x;
        this.y -= op.y;
        return this;
    }

    /** Multiplies the magnitude of this vector by the given scalar. Mutates the original vector. */
    multiply(scalar: number): Vector {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    /** Divides the magnitude of this vector by the given scalar. Mutates the original vector. */
    divide(scalar: number): Vector {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    }
}

export class Rect {
    constructor(public left: number, public top: number, public right: number, public bottom: number) { }

    get width(): number {
        return this.right - this.left;
    }

    get height(): number {
        return this.bottom - this.top;
    }

    get center(): Point {
        return new Point((this.left + this.right) / 2, (this.top + this.bottom) / 2);
    }

    get position(): Point {
        return new Point(this.left, this.top);
    }
}

export class Size {
    constructor(public width: number, public height: number) { }
}
