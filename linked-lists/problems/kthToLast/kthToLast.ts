import { LinkedListAndNode as Node } from '../../LinkedListAndNode'

/**
 * Find the Kth Node and return it
 * in case k is out of bounds return last node
 * @param node 
 * @param k positive integer that represents an index
 * @returns Kth Node
 */
const findKthToLast = (node: Node, k: number): Node => {
  let i = 0;
  while(node.next && i < k) {
    node = node.next;
    i++;
  }
  return node;
}

export default findKthToLast;