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
}

export class Vector implements Coordinate {
    constructor(public x: number, public y: number) { }

    static from(p: Coordinate): Vector {
        return new Vector(p.x, p.y);
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

    /** Normalizes a vector to a unit length. Mutates the original vector. */
    normalize(): Vector {
        const len = this.magnitude();
        this.x /= len;
        this.y /= len;
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
}

export class Size {
    constructor(public width: number, public height: number) { }
}
