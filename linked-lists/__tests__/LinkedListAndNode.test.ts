import { LinkedListAndNode } from '../LinkedListAndNode';
let testLinkedList;

beforeEach(() => {
  testLinkedList = new LinkedListAndNode(0);
  for (let i = 1; i < 11; i++) {
    testLinkedList.appendToEnd(i);
  }
});

it('Verifies LinkedListAndNode was added 10 elements', () => {
  expect(testLinkedList.printHumanReadable()).toBe('0->1->2->3->4->5->6->7->8->9->10->null')
});

it('Adds number 100 at "index" 5', () => {
  testLinkedList.appendAtIndex(5, 100);
  expect(testLinkedList.atIndex(5)).toBe(100);
});

it('Append at "index" 0 and returns the new modified copy, does NOT modifies the original', () => {
  let modifiedLinkedList = testLinkedList.appendAtIndex(0, 100);
  let original = testLinkedList;
  expect(original.printHumanReadable()).toBe('0->1->2->3->4->5->6->7->8->9->10->null')
  expect(modifiedLinkedList.printHumanReadable()).toBe('100->0->1->2->3->4->5->6->7->8->9->10->null')
});

it('Append at "index" different than 0, returns the new modified copy and MODIFIES the original', () => {
  let modifiedLinkedList = testLinkedList.appendAtIndex(5, 100);
  let original = testLinkedList;
  expect(original.printHumanReadable()).toBe('0->1->2->3->4->100->5->6->7->8->9->10->null')
  expect(modifiedLinkedList.printHumanReadable()).toBe('0->1->2->3->4->100->5->6->7->8->9->10->null')
});