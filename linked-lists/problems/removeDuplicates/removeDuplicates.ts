import { LinkedList } from '../../LinkedList';

const removeDuplicates = (ll: LinkedList): LinkedList => {
  let cleanLl: LinkedList = new LinkedList;
  let set = {}
  cleanLl.head = ll.head;
  let n = ll.head;
  let prev = n
  while (n) {
    if (set[n.payload]) {
      prev.next = n.next
    } else {
      set[n.payload] = true;
      prev = n;
    }
    n = n.next;
  }
  return cleanLl;
}

export default removeDuplicates;

