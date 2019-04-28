export default class WrapAroundArray {
  array: Array<number>;
  size: number = 0;
  limit: number;
  lastIndex: number = 0;
  constructor(size: number) {
    this.array = new Array(size)
    this.limit = size;
  }

  get length(): number {
        return this.size;
  }

  pop() {
    //TODO
  }

  push(element: number): void {
    if (this.lastIndex === this.limit) {
      this.lastIndex = 0;
    }
    this.array[this.lastIndex] = element;
    this.lastIndex++;
    this.size = this.isFull() ? this.size : this.size + 1;
  }

  isFull(): boolean {
    return this.size === this.limit;
  }
}
