import { LinkedList } from '../../LinkedList';
import removeDuplicates  from './removeDuplicates'

it('Removes duplicates out of linked list', () => {
  let array = [1, 3, 4, 5, 2, 1, 2, 5, 6, 7, 8, 3]
  let ll: LinkedList = new LinkedList().fromArray(array);
  let cleanLl: LinkedList = removeDuplicates(ll);
  expect(cleanLl.printHumanReadable()).toBe('1->3->4->5->2->6->7->8->null')
})

it('Removes duplicates out of linked list', () => {
  let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  let ll: LinkedList = new LinkedList().fromArray(array);
  let cleanLl: LinkedList = removeDuplicates(ll);
  expect(cleanLl.printHumanReadable()).toBe('1->null')
})