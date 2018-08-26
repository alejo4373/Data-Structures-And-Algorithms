let { LinkedListAndNode } = require('../LinkedListAndNode');

it('Creates a new LinkedListAndNode and adds 10 elements', () => {
  let myLinkedList = new LinkedListAndNode(0);
  for (let i = 1; i < 11; i++) {
    myLinkedList.appendToEnd(i);
  }
  expect(myLinkedList.printDummyHumanReadable()).toBe('0->1->2->3->4->5->6->7->8->9->10->null')
});

it('Creates a new LinkedListAndNode and adds number 100 at "index" 5', () => {
  let myLinkedList = new LinkedListAndNode(0);
  for (let i = 1; i < 11; i++) {
    myLinkedList.appendToEnd(i);
  }
  myLinkedList.appendAtIndex(5, 100);
  expect(myLinkedList.atIndex(5)).toBe(100);
});