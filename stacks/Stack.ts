/**
 * Stack data structure implemented with an array
 * @class
 */
export class Stack {
  stack: Array<any> = [];

  peek(): any {
    return this.stack[this.stack.length - 1];
  }

  pop(): any {
    return this.stack.pop();
  }

  push(val: any): void {
    this.stack.push(val);
  }

  isEmpty(): boolean {
    return this.stack.length ? false : true
  }
}


