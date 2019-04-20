import { LinkedListAndNode as Node } from '../../LinkedListAndNode';
import findKthToLast  from './kthToLast'

it('Find kth to last elements of a linked list', () => {
  let array = [1, 3, 4, 5, 2, 6, 7, 8]
  let node: Node = new Node(array[0])
  for (let i = 1; i < array.length; i++) {
    node.appendToEnd(array[i]);
  }
  let result = findKthToLast(node, 4);
  expect(result.printHumanReadable()).toBe('2->6->7->8->null')
})

it('Handle 2 nodes linked list', () => {
  let array = [1, 3]
  let node: Node = new Node(array[0])
  for (let i = 1; i < array.length; i++) {
    node.appendToEnd(array[i]);
  }

  let all = findKthToLast(node, 0);
  expect(all.printHumanReadable()).toBe('1->3->null')

  let secondHalf = findKthToLast(node, 1);
  expect(secondHalf.printHumanReadable()).toBe('3->null')
})

it('Handle out of bounds k', () => {
  let array = [1, 3, 4, 5, 2, 6, 7, 8]
  let node: Node = new Node(array[0])
  for (let i = 1; i < array.length; i++) {
    node.appendToEnd(array[i]);
  }

  let secondHalf = findKthToLast(node, 9);
  expect(secondHalf.printHumanReadable()).toBe('8->null')
})