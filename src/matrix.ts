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

interface TypedArray<ValueType> {
    get size(): SizeType;
    get(index: IndexType): ValueType;
    set(index: IndexType, value: ValueType): void;
    duplicate(): TypedArray<ValueType>;
    subarray(begin: IndexType, end: IndexType): TypedArray<ValueType>;
    sum(): ValueType;
    prod(): ValueType;
    add(op: Readonly<TypedArray<ValueType>>): TypedArray<ValueType>;
    subtract(op: Readonly<TypedArray<ValueType>>): TypedArray<ValueType>;
    copyFrom(a: ArrayLike<ValueType>): void;
    toArray(): ValueType[];
}

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
        return new RealArray(this.data);
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

    /** Adds a vector to this vector. Mutates the original vector. */
    add(op: Readonly<TypedArray<number>>): TypedArray<number> {
        for (let k = 0; k < this.size; ++k) {
            this.data[k] += op.get(k);
        }
        return this;
    }

    /** Subtracts a vector from this vector. Mutates the original vector. */
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

interface Matrix<ValueType> {
    get data(): TypedArray<ValueType>;
    get rows(): SizeType;
    get cols(): SizeType;
    get(i: IndexType, j: IndexType): ValueType;
    set(i: IndexType, j: IndexType, value: ValueType): void;
    duplicate(): Matrix<ValueType>;
    add(op: Readonly<Matrix<ValueType>>): Matrix<ValueType>;
    subtract(op: Readonly<Matrix<ValueType>>): Matrix<ValueType>;
    plus(op: Readonly<Matrix<ValueType>>): Matrix<ValueType>;
    minus(op: Readonly<Matrix<ValueType>>): Matrix<ValueType>;
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

    row(k: IndexType): TypedArray<ValueType> {
        const start = k * this.rows;
        return this.data.subarray(start, start + this.rows);
    }

    abstract duplicate(): Matrix<ValueType>;

    compareShape(op: Readonly<Matrix<ValueType>>): void {
        if (this.rows != op.rows || this.cols != op.cols) {
            throw RangeError("incompatible matrix dimensions");
        }
    }

    /** Adds a matrix to this matrix. Mutates the original matrix. */
    add(op: Readonly<Matrix<ValueType>>): Matrix<ValueType> {
        this.compareShape(op);
        this.data.add(op.data);
        return this;
    }

    /** Subtracts a matrix from this matrix. Mutates the original matrix. */
    subtract(op: Readonly<Matrix<ValueType>>): Matrix<ValueType> {
        this.compareShape(op);
        this.data.subtract(op.data);
        return this;
    }

    /** Returns the sum of two matrices. */
    plus(op: Readonly<Matrix<ValueType>>): Matrix<ValueType> {
        return this.duplicate().add(op);
    }

    /** Returns the difference of two matrices. */
    minus(op: Readonly<Matrix<ValueType>>): Matrix<ValueType> {
        return this.duplicate().subtract(op);
    }

    rowSum(): ValueType[] {
        const result: ValueType[] = Array(this.rows).fill(0);
        for (let k = 0; k < this.rows; ++k) {
            result[k] = this.row(k).sum();
        }
        return result;
    }

    toArray(): ValueType[][] {
        const a: Array<Array<ValueType>> = [];
        for (let k = 0; k < this.rows; ++k) {
            a.push(this.row(k).toArray());
        }
        return a;
    }
}

export class RealMatrix extends GenericMatrix<number> {
    static zeros(rows: number, cols: number): RealMatrix {
        return new RealMatrix(new RealArray(rows * cols), rows, cols);
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
}
