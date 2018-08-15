/**
 * Creates a node that will hold data and a reference to next
 * @class 
 */
export class LinkedListNode {
  next: LinkedListNode = null;
  data: any;

  constructor(data: any) {
    this.data = data;
  }
}

/**
 * Creates a LinkedList that will hold references to the head and tail nodes
 * @class 
 */
export class LinkedList {
  head: LinkedListNode = null;
  tail: LinkedListNode = null;

  constructor(data: any) {
    this.head = new LinkedListNode(data);
    this.tail = this.head
  }

  appendFirst(data: any): void {
    let newHead: LinkedListNode = new LinkedListNode(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  appendToEnd(data: any): void {
    let newNode : LinkedListNode = new LinkedListNode(data);
    this.tail.next = newNode;
    this.tail = newNode
  }

  appendAtIndex(index: number, data: any): void {
    let crrIndex: number = 0; // kind of indexing linked list like arrays
    let newNode: LinkedListNode = new LinkedListNode(data);
    let node: LinkedListNode = this.head;
    if (index !== 0) {
      while (node.next !== null && crrIndex !== index - 1) {
        node = node.next;
        crrIndex += 1;
      }
        newNode.next = node.next;
        node.next = newNode;
      //Check if were at the tail to update this.tail
      if(newNode.next === null) { 
        this.tail = newNode
      }
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /**
   * Finds node that satisfies the callback test 
   * @param callback function to execute on each node, taking the current node as argument
   * @returns {LinkedListNode} that satisfies the provided testing function. Otherwise undefined
   */
  find(callback: Function): LinkedListNode {
    let crrNode: LinkedListNode = this.head
    while(crrNode.next !== null) {
      if(callback(crrNode)) {
        return crrNode;
      }
      crrNode = crrNode.next;
    }
    return undefined;
  }

  printHumanReadable(): string {
    let node: LinkedListNode = this.head;
    let result: string = node.data + '->'
    while (node.next !== null) {
      result += node.next.data + '->';
      node = node.next;
    }
    return result + null
  }

  atIndex(index: number): any {
    let node: LinkedListNode = this.head;
    let i: number = 0;
    while (i < index) {
      node = node.next;
      i += 1;
    }
    return node.data
  }
}