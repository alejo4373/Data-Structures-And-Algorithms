import { LinkedListAndNode as Node } from '../../LinkedListAndNode'

/**
 * Find the Kth to last Node and return it
 * in case k is out of bounds return head node
 * @param node 
 * @param k positive integer that represents an index
 * @returns Kth Node
 */
export const findKthToLastIteratevly = (node: Node, k: number): Node => {
  let behind = node;
  let i = 1;

  if (!node || k < 1) return null;

  while (i < k) {
    node = node.next;
    if(!node) return behind; //k was out of bounds
    i++;
  }

  while (node.next) {
    behind = behind.next
    node = node.next;
  }
  return behind;
}

interface memoObj extends Object {
  k: number,
  node: Node
}

const findKthToLastRecursively = (node: Node, memo: memoObj): number => {
  if (!node) return 0;
  let i: number = findKthToLastRecursively(node.next, memo) + 1;
  if (i === memo.k) {
    memo.node = node;
  }
  return i;
}

export const findKthToLastRecursivelyMain = (node: Node, k: number): Node=> {
  let memo: memoObj = {k: k, node: null};
  findKthToLastRecursively(node, memo);
  if(!memo.node) memo.node = node; // Out of bounds k
  return memo.node;
}

