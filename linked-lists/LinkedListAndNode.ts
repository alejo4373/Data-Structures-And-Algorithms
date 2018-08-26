/**
 * Creates a node that will hold a linked list in itself
 * @class 
 */
export class LinkedListAndNode {
  next: LinkedListAndNode = null;
  payload: any;

  constructor(payload: any) {
    this.payload = payload;
  }

  appendToEnd(payload: any): void {
    let endNode: LinkedListAndNode = new LinkedListAndNode(payload);
    let node: LinkedListAndNode = this;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = endNode
  }

  //Returns a new copy of the linked list, modifies the original only if the index is not 0
  appendAtIndex(index: number, payload: any): LinkedListAndNode {
    let crrIndex: number = 0; // kind of indexing linked list like arrays
    let newNode: LinkedListAndNode = new LinkedListAndNode(payload);
    let node: LinkedListAndNode = this;
    if (index !== 0) {
      while (node.next !== null && crrIndex !== index - 1) {
        node = node.next;
        crrIndex += 1;
      }
      newNode.next = node.next;
      node.next = newNode;
    } else {
      newNode.next = this;
      node = newNode;
      // If inserted a new head(index 0) return that new head with the rest of the LL
      // attached to node.next  
      return node
    }
    // If the insertion happened anywhere else but in the first node(head)
    // I need to return the modified copy
    return this;
  }

  printHumanReadable(): string {
    let node: LinkedListAndNode = this;
    let result: string = node.payload + '->'
    while (node.next !== null) {
      result += node.next.payload + '->';
      node = node.next;
    }
    return result + null
  }

  atIndex(index: number): any {
    let node: LinkedListAndNode = this;
    let i: number = 0;
    while (i < index) {
      node = node.next;
      i += 1;
    }
    return node.payload
  }
}

let myLinkedList = new LinkedListAndNode(0);
for (let i = 1; i < 11; i++) {
  myLinkedList.appendToEnd(i);
}

