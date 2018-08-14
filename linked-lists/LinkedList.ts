/**
 * Creates a node that will hold a linked list in itself
 * @class 
 */
export class LinkedListNode {
  next: LinkedListNode = null;
  data: any;

  constructor(data: any) {
    this.data = data;
  }

  appendToEnd(data: any): void {
    let endNode: LinkedListNode = new LinkedListNode(data);
    let node: LinkedListNode = this;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = endNode
  }

  /**
   * appends at a given "index" and returns the new linked list
   * does not modify the original
   * @param index number
   * @param data any
   */
  //This is giving me problems I should have a LinkedList class wrapping the Node
  //because what if you want to update index 0 which will be this (the head)
  appendAtGivenIndex(index: number, data: any): LinkedListNode {
    let crrIndex: number = 0; // kind of indexing linked list like arrays
    let newNode: LinkedListNode = new LinkedListNode(data);
    let node: LinkedListNode = this;
    if (index !== 0) {
      while (node.next !== null && crrIndex !== index - 1) {
        node = node.next;
        crrIndex += 1;
      }
      console.log('crrNode', node)
      newNode.next = node.next;
      node.next = newNode;
    } else {
      newNode.next = this;
      node = newNode;
    }
    return node;
  }

  printDummyHumanReadable(): string {
    let node: LinkedListNode = this;
    let result: string = node.data + '->'
    while (node.next !== null) {
      result += node.next.data + '->';
      node = node.next;
    }
    return result + null
  }

  atIndex(index: number): any {
    let node: LinkedListNode = this;
    let i: number = 0;
    while (i < index) {
      node = node.next;
      i += 1;
    }
    return node.data
  }
}

let myLinkedList = new LinkedListNode(0);
for (let i = 1; i < 11; i++) {
  myLinkedList.appendToEnd(i);
}
let newLL = myLinkedList.appendAtGivenIndex(5, 100);
console.log(myLinkedList.printDummyHumanReadable());
console.log(newLL.printDummyHumanReadable());