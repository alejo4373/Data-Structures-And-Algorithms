/**
 * Creates a node that will hold a linked list in itself
 * @class 
 */
export class DoublyLinkedList {
  next: DoublyLinkedList = null;
  prev: DoublyLinkedList = null;
  payload: any;

  constructor(payload: any) {
    this.payload = payload;
  }
  

  appendToEnd(payload: any): void {
    let endNode: DoublyLinkedList = new DoublyLinkedList(payload);
    let node: DoublyLinkedList = this;
    while (node.next !== null) {
      node = node.next;
    } 
    node.next = endNode;
    endNode.prev = node;
  }

  //Returns a new copy of the linked list, modifies the original only if the index is not 0
  appendAtIndex(index: number, payload: any): DoublyLinkedList {
    let crrIndex: number = 0; // kind of indexing linked list like arrays
    let newNode: DoublyLinkedList = new DoublyLinkedList(payload);
    let node: DoublyLinkedList = this;
    if (index !== 0) {
      while (node.next !== null && crrIndex !== index - 1) {
        node = node.next;
        crrIndex += 1;
      }
      let nextNode = node.next;
      nextNode.prev = newNode;  // set nextNode.prev to reference the newNode
      newNode.next = nextNode; // set newNode.next to reference nextNode
      newNode.prev = node;     // set newNode.prev to reference the current node
      node.next = newNode;     // set the current node.next to reference newNode
    } else {
      node.prev = newNode;
      newNode.next = node;
      // If inserted a new head(index 0) return that new head with the rest of the LL
      // attached to node.next  
      return newNode;
    }
    // If the insertion happened anywhere else but in the first node(head)
    // I need to return the modified copy
    return this;
  }

  printHumanReadable(): string {
    let node: DoublyLinkedList = this;
    let result: string = node.payload + '<->'
    while (node.next.next !== null) {
      result += node.next.payload + '<->';
      node = node.next;
    }
    return result + node.next.payload + '->' + null
  }

  atIndex(index: number): any {
    let node: DoublyLinkedList = this;
    let i: number = 0;
    while (i < index) {
      node = node.next;
      i += 1;
    }
    return node
  }
}