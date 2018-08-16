let { DoublyLinkedList } = require('./DoublyLinkedList');

let testDoublyLinkedList;
beforeEach(() => {
  testDoublyLinkedList = new DoublyLinkedList(0);
  for (let i = 1; i < 11; i++) {
    testDoublyLinkedList.appendToEnd(i);
  }
})

test('New DoublyLinedList with 10 elements', () => {
  expect(testDoublyLinkedList.printHumanReadable()).toBe('0<->1<->2<->3<->4<->5<->6<->7<->8<->9<->10->null')
});

test('adds number 100 at "index" 5', () => {
  testDoublyLinkedList.appendAtIndex(5, 100);
  expect(testDoublyLinkedList.atIndex(5).payload).toBe(100);
});

test('goes to end of the list and back where payload is 0 and .prev = null', () => {
  let node = testDoublyLinkedList.atIndex(10); //Go to the end 
  expect(node.next).toBeNull();
  //Go back to the beginning
  while(node.prev !== null) {
    node = node.prev;
  }
  expect(node.prev).toBeNull(); //first node .prev should be null
})