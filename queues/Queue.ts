import { LinkedList } from '../linked-lists/LinkedList';
/**
 * Queue data structure implemented with a LinkedList
 * @class
 */
export class Queue {
  queue: LinkedList;

  constructor() {
    this.queue = new LinkedList();
  }

  enqueue(item: any): void {
    this.queue.appendToEnd(item);
  }

  dequeue(): any {
    return this.queue.removeFirst();
  }

  peek(): any {
    return this.queue.head.payload
  }
  
  isEmpty(): boolean {
    return this.queue.head === null 
  }

  printHumanReadable(): string {
    let result = this.queue.printHumanReadable()
    result = result.split('->')
                   .slice(0, -1)
                   .join(',')
    return '<=' + result + '<='
  }
}


