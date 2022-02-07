declare interface BooleanMatrixOps {
    get(i: number, j: number): boolean;
    set(i: number, j: number, value: boolean): void;
}

export class BooleanMatrix implements BooleanMatrixOps {
    private array: Uint8Array;
    private stride: number;

    constructor(private rows: number, private cols: number) {
        this.stride = (cols + 7) / 8 | 0;
        this.array = new Uint8Array(rows * this.stride);
    }

    private getByteIndex(i: number, j: number): number {
        return i * this.stride + (j / 8 | 0);
    }

    private getByteValue(i: number, j: number): number {
        return this.array[this.getByteIndex(i, j)]!;
    }

    get(i: number, j: number): boolean {
        if (i < 0 || i >= this.rows || j < 0 || j >= this.cols) {
            throw RangeError("array index out of bounds");
        }

        return (this.getByteValue(i, j) & (1 << (j % 8))) != 0;
    }

    set(i: number, j: number, value: boolean): void {
        if (i < 0 || i >= this.rows || j < 0 || j >= this.cols) {
            throw RangeError("array index out of bounds");
        }

        let byte = this.getByteValue(i, j);
        if (value) {
            byte |= 1 << (j % 8);
        } else {
            byte &= ~(1 << (j % 8));
        }
        this.array[this.getByteIndex(i, j)] = byte;
    }
}
