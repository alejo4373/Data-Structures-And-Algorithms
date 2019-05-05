class Stack {
  capacity: number;
  size: number = 0;
  start: number;
  top: number;
  constructor(capacity: number, start: number) {
    this.capacity = capacity;
    this.start = start;
    this.top = start;
  } 

  isStackFull(): boolean {
    return this.top === (this.start + this.capacity) - 1;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

/**
 * Allocates an array to manage any number of stacks
 * @class
 */
class StacksManager {
  stacks: Array<Stack>;
  values: Array<number>;
  size: number = 0;
  /**
   * Creates a StackManager instance 
   * @param n Number of stacks to create
   * @param c Capacity allocated for each stack
   */
  constructor(n: number, c: number) {
    const totalCapacity = n * c;
    this.values = new Array(totalCapacity);
    this.stacks = [];
    for (let i = 0; i < totalCapacity; i+=c) {
      this.stacks.push(new Stack(c, i))
    }
  }

  get isFull(): boolean {
    return this.size === this.values.length;
  }

  /**
   * Pushes/inserts value into stack
   * @param stack Stack to push value to
   * @param value Value to push to stack
   */
  push(stack: number, value: number): void {
    let stackIndex = stack - 1;
    let s = this.stacks[stackIndex];
    if(!this.isFull) {
      if(!s.isStackFull()) {
        this.values[s.top] = value;
        s.top++;
        s.size++;
        this.size++
      }
    }
  }
}

const main = () => {
  let s = new StacksManager(3, 3);
  s.push(2, 10);
  console.log(s)
}

main();
