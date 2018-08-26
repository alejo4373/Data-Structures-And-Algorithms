import { LinkedList } from '../LinkedList';
let testLinkedList: LinkedList;

beforeEach(() => {
  // Fill LinkedList
  testLinkedList = new LinkedList();
  for (let i = 1; i < 11; i++) {
    testLinkedList.appendToEnd(i);
  }
})

it('10 elements were added appending to the end', () => {
  expect(testLinkedList.printHumanReadable()).toBe('1->2->3->4->5->6->7->8->9->10->null')
});

it('10 elements were appended first', () => {
  testLinkedList = new LinkedList();
  for (let i = 1; i < 11; i++) {
    testLinkedList.appendFirst(i);
  }
  expect(testLinkedList.printHumanReadable()).toBe('10->9->8->7->6->5->4->3->2->1->null')
});

it('Creates a new LinkedList and adds number 100 at "index" 5', () => {
  testLinkedList.appendAtIndex(5, 100);
  expect(testLinkedList.atIndex(5)).toBe(100);
})

it('Trying to add number 100 at an out of bounds "index" 20 results adding at the end(tail)', () => {
  testLinkedList.appendAtIndex(20, 100);
  expect(testLinkedList.tail.payload).toBe(100);
});

it('.find() node with payload 5 in the linked list and nonexistent node ', () => {
  let node = testLinkedList.find((n) => n.payload === 5);
  let nonexistentNode = testLinkedList.find((n) => n.payload === 500);
  expect(node).toBe(5);
  expect(nonexistentNode).toBeUndefined();
});

it('Remove first element(head)', () => {
  let removedNode = testLinkedList.removeFirst();
  expect(removedNode).toBe(1);
  expect(testLinkedList.printHumanReadable()).toBe('2->3->4->5->6->7->8->9->10->null');
});

it('Remove last element and reassign tail', () => {
  let removedNode = testLinkedList.removeLast();
  expect(removedNode).toBe(10);
  expect(testLinkedList.tail.payload).toBe(9);
  expect(testLinkedList.printHumanReadable()).toBe('1->2->3->4->5->6->7->8->9->null');
});

it('Empty list removing first element)', () => {
  while (testLinkedList.head !== null) {
    testLinkedList.removeFirst();
  }
  expect(testLinkedList.head).toBeNull();
  expect(() => testLinkedList.printHumanReadable()).toThrowError('Error empty list. Nothing to print');
});

it('Empty list removing last element)', () => {
  while (testLinkedList.head !== null) {
    testLinkedList.removeLast();
  }
  expect(testLinkedList.head).toBeNull();
  expect(() => testLinkedList.printHumanReadable()).toThrowError('Error empty list. Nothing to print');
});