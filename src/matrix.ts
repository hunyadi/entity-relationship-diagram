/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://hunyadi.info.hu/
 **/

type IndexType = number;
type SizeType = number;

/**
 * A vector (dense array) of values.
 */
interface TypedArray<ValueType> {
    get size(): SizeType;
    get(index: IndexType): ValueType;
    set(index: IndexType, value: ValueType): void;

    /** Creates a copy of this vector. */
    duplicate(): TypedArray<ValueType>;

    /** Returns a view to part of this vector. No copy is made. */
    subarray(begin: IndexType, end: IndexType): TypedArray<ValueType>;

    /** Returns the sum of all values in this vector. */
    sum(): ValueType;

    /** Returns the product of all values in this vector. */
    prod(): ValueType;

    /** Adds a vector to this vector. Mutates the original vector. */
    add(op: Readonly<TypedArray<ValueType>>): TypedArray<ValueType>;

    /** Subtracts a vector from this vector. Mutates the original vector. */
    subtract(op: Readonly<TypedArray<ValueType>>): TypedArray<ValueType>;

    /** Sets the data in this vector based on an array-like source. */
    copyFrom(a: ArrayLike<ValueType>): void;

    /** Returns a JavaScript array with the same values as in the vector. */
    toArray(): ValueType[];
}

/**
 * A vector or real numbers.
 */
class RealArray implements TypedArray<number> {
    private data: Float64Array;
    public size: SizeType;

    constructor(size: SizeType);
    constructor(data: Float64Array);

    constructor(arg: SizeType | Float64Array) {
        if (arg instanceof Float64Array) {
            this.data = arg;
            this.size = this.data.length;
        } else {
            this.size = arg;
            this.data = new Float64Array(this.size);
        }
    }

    get(index: IndexType): number {
        return this.data[index]!;
    }

    set(index: IndexType, value: number): void {
        this.data[index] = value;
    }

    duplicate(): TypedArray<number> {
        const data = new Float64Array(this.data.length);
        data.set(this.data);
        return new RealArray(data);
    }

    subarray(begin: IndexType, end: IndexType): TypedArray<number> {
        return new RealArray(this.data.subarray(begin, end));
    }

    sum(): number {
        return this.data.reduce((partialSum, element) => partialSum + element, 0);
    }

    prod(): number {
        return this.data.reduce((partialSum, element) => partialSum * element, 1);
    }

    add(op: Readonly<TypedArray<number>>): TypedArray<number> {
        for (let k = 0; k < this.size; ++k) {
            this.data[k] += op.get(k);
        }
        return this;
    }

    subtract(op: Readonly<TypedArray<number>>): TypedArray<number> {
        for (let k = 0; k < this.size; ++k) {
            this.data[k] -= op.get(k);
        }
        return this;
    }

    copyFrom(a: ArrayLike<number>): void {
        this.data.set(a);
    }

    toArray(): number[] {
        return Array.from(this.data);
    }
}

/**
 * A (dense) matrix.
 */
interface Matrix<ValueType> {
    get data(): TypedArray<ValueType>;
    get rows(): SizeType;
    get cols(): SizeType;

    /** Returns an entry of a matrix at the specified row and column index. */
    get(i: IndexType, j: IndexType): ValueType;

    /** Assigns a value to an entry of a matrix at the specified row and column index. */
    set(i: IndexType, j: IndexType, value: ValueType): void;

    /** Creates a copy of a matrix. */
    duplicate(): Matrix<ValueType>;

    /** Returns the transpose of a matrix. */
    transpose(): Matrix<ValueType>;

    /** Returns a vector of all diagonal entries of a matrix. */
    diag(): TypedArray<ValueType>;

    /** Adds a matrix to this matrix. Mutates the original matrix. */
    add(op: Readonly<Matrix<ValueType>>): Matrix<ValueType>;

    /** Subtracts a matrix from this matrix. Mutates the original matrix. */
    subtract(op: Readonly<Matrix<ValueType>>): Matrix<ValueType>;

    /** Returns the sum of two matrices. */
    plus(op: Readonly<Matrix<ValueType>>): Matrix<ValueType>;

    /** Returns the difference of two matrices. */
    minus(op: Readonly<Matrix<ValueType>>): Matrix<ValueType>;

    /** Returns the product of two matrices. */
    mtimes(op: Readonly<Matrix<ValueType>>): Matrix<ValueType>;

    rowSum(): ValueType[];
    toArray(): ValueType[][];
}

abstract class GenericMatrix<ValueType> implements Matrix<ValueType> {
    protected constructor(public data: TypedArray<ValueType>, public rows: SizeType, public cols: SizeType) { }

    get(i: IndexType, j: IndexType): ValueType {
        return this.data.get(i * this.cols + j);
    }

    set(i: IndexType, j: IndexType, value: ValueType): void {
        return this.data.set(i * this.cols + j, value);
    }

    /** Returns a given row of the matrix. */
    row(k: IndexType): TypedArray<ValueType> {
        const start = k * this.rows;
        return this.data.subarray(start, start + this.rows);
    }

    abstract duplicate(): Matrix<ValueType>;

    abstract transpose(): Matrix<ValueType>;

    abstract diag(): TypedArray<ValueType>;

    private compareShape(op: Readonly<Matrix<ValueType>>): void {
        if (this.rows != op.rows || this.cols != op.cols) {
            throw RangeError("incompatible matrix dimensions");
        }
    }

    add(op: Readonly<Matrix<ValueType>>): Matrix<ValueType> {
        this.compareShape(op);
        this.data.add(op.data);
        return this;
    }

    subtract(op: Readonly<Matrix<ValueType>>): Matrix<ValueType> {
        this.compareShape(op);
        this.data.subtract(op.data);
        return this;
    }

    plus(op: Readonly<Matrix<ValueType>>): Matrix<ValueType> {
        return this.duplicate().add(op);
    }

    minus(op: Readonly<Matrix<ValueType>>): Matrix<ValueType> {
        return this.duplicate().subtract(op);
    }

    abstract mtimes(op: Readonly<Matrix<ValueType>>): Matrix<ValueType>;

    rowSum(): ValueType[] {
        return Array.from(
            { length: this.rows },
            (_, k) => this.row(k).sum()
        );
    }

    toArray(): ValueType[][] {
        return Array.from(
            { length: this.rows },
            (_, k) => this.row(k).toArray()
        );
    }
}

/**
 * A matrix of real numbers.
 */
export class RealMatrix extends GenericMatrix<number> {
    static zeros(rows: number, cols: number): RealMatrix {
        return new RealMatrix(new RealArray(rows * cols), rows, cols);
    }

    static eye(rows: number, cols: number): RealMatrix {
        const result = RealMatrix.zeros(rows, cols);
        for (let k = 0; k < Math.min(rows, cols); ++k) {
            result.set(k, k, 1);
        }
        return result;
    }

    static copy(op: Matrix<number>): RealMatrix {
        return new RealMatrix(op.data.duplicate(), op.rows, op.cols);
    }

    static diag(d: number[]): RealMatrix {
        const rows = d.length;
        const m = RealMatrix.zeros(rows, rows);
        for (let i = 0; i < rows; ++i) {
            m.set(i, i, d[i]!);
        }
        return m;
    }

    static from(a: number[][]): RealMatrix {
        const rows = a.length;
        const cols = a[0]!.length;
        const m = RealMatrix.zeros(rows, cols);
        for (let i = 0; i < rows; ++i) {
            for (let j = 0; j < cols; ++j) {
                m.set(i, j, a[i]![j]!);
            }
        }
        return m;
    }

    duplicate(): RealMatrix {
        return new RealMatrix(this.data.duplicate(), this.rows, this.cols);
    }

    transpose(): RealMatrix {
        const result = RealMatrix.zeros(this.cols, this.rows);
        for (let i = 0; i < this.rows; ++i) {
            for (let j = 0; j < this.cols; ++j) {
                result.set(j, i, this.get(i, j));
            }
        }
        return result;
    }

    diag(): RealArray {
        const len = Math.min(this.rows, this.cols);
        const arr = new RealArray(len);
        for (let k = 0; k < len; ++k) {
            arr.set(k, this.get(k, k));
        }
        return arr;
    }

    mtimes(op: Readonly<Matrix<number>>): Matrix<number> {
        const result = RealMatrix.zeros(this.rows, op.cols);
        for (let i = 0; i < this.rows; ++i) {
            for (let j = 0; j < this.cols; ++j) {
                let s = 0;
                for (let k = 0; k < this.rows; ++k) {
                    s += this.get(i, k) * op.get(k, j);
                }
                result.set(i, j, s);
            }
        }
        return result;
    }
}

type MatrixEntry<ValueType> = {
    row: IndexType;
    col: IndexType;
    value: ValueType;
};

/**
 * Computes the eigenvalues of a matrix using the Jacobi method.
 * @see http://www.math.u-szeged.hu/~nagyg/Oktatas/INF/DiagonalizationJacobi.html
 */
export class Jacobi {
    static readonly TOLERANCE = 1e-6;

    A: RealMatrix;
    Q: RealMatrix;

    /**
     * Creates a new Jacobi method runner for a matrix.
     * @param M The matrix whose eigenvalues and eigenvectors to compute.
     */
    constructor(M: Matrix<number>) {
        this.A = RealMatrix.copy(M);
        this.Q = RealMatrix.eye(M.rows, M.cols);
    }

    /**
     * Computes the eigenvalues of the associated matrix using the Jacobi method.
     * @returns This object, for property accessor chaining.
     */
    run(): Jacobi {
        for (let iter = 0; iter < 1000; iter++) {
            let maximum = this.computeMaximum();
            if (2 * maximum.value < Jacobi.TOLERANCE) {
                break;
            }
            const [c, s] = this.computeRotation(maximum.row, maximum.col);
            this.updateMatrices(maximum.row, maximum.col, c, s);
        }
        return this;
    }

    get eigenvalues(): number[] {
        return this.A.diag().toArray();
    }

    get eigenvectors(): TypedArray<number>[] {
        return Array.from(
            { length: this.Q.rows },
            (_, k) => this.Q.row(k)
        );
    }

    private computeMaximum(): MatrixEntry<number> {
        let im = 0;
        let jm = 0;
        let am = -Number.MAX_VALUE;
        const dim = this.A.rows;
        for (let i = 0; i < dim - 1; i++) {
            for (let j = i + 1; j < dim; j++) {
                if (Math.abs(this.A.get(i, j)) > am) {
                    im = i;
                    jm = j;
                    am = Math.abs(this.A.get(i, j));
                }
            }
        }
        return {
            row: im, col: jm, value: am
        };
    }

    private computeRotation(i: number, j: number): [number, number] {
        let beta = (this.A.get(i, i) - this.A.get(j, j)) / 2 / this.A.get(i, j);
        beta /= Math.sqrt(1 + beta * beta);
        const c = Math.sqrt(0.5 + beta / 2);
        const s = Math.sqrt(0.5 - beta / 2);
        return [c, s];
    }

    private updateMatrices(i: number, j: number, c: number, s: number): void {
        const dim = this.A.rows;
        for (let k = 0; k < dim; k++) {
            const xi = c * this.A.get(i, k) + s * this.A.get(j, k);
            const xj = -s * this.A.get(i, k) + c * this.A.get(j, k);
            this.A.set(i, k, xi);
            this.A.set(j, k, xj);
        }
        for (let k = 0; k < dim; k++) {
            const xi = c * this.A.get(k, i) + s * this.A.get(k, j);
            const xj = -s * this.A.get(k, i) + c * this.A.get(k, j);
            this.A.set(k, i, xi);
            this.A.set(k, j, xj);
        }
        for (let k = 0; k < dim; k++) {
            const xi = c * this.Q.get(i, k) + s * this.Q.get(j, k);
            const xj = -s * this.Q.get(i, k) + c * this.Q.get(j, k);
            this.Q.set(i, k, xi);
            this.Q.set(j, k, xj);
        }
    }
}

/**
 * Returns an array of indices that puts the items in an array in increasing order.
 * @param arrayToSort The array A in which to compare elements.
 * @returns An index array I such that A[I[k]] is ordered from smallest to largest.
 */
export function sortedIndexArray<T>(arrayToSort: readonly T[]): IndexType[] {
    return Array.from(Array(arrayToSort.length).keys()).sort((ixA, ixB) => {
        const valA = arrayToSort[ixA]!;
        const valB = arrayToSort[ixB]!;
        return valA < valB ? -1 : (valB < valA ? 1 : 0);
    });
}
