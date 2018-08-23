import { BinaryTreeNode } from './BinaryTreeNode';

export const btsBuilder = (arr: Array<number>, start: number = 0, end: number = arr.length - 1, parent: BinaryTreeNode = null): BinaryTreeNode => {
  if (end < start) {
    return null;
  }

  if (end === start) {
    let node: BinaryTreeNode =  new BinaryTreeNode(arr[start]);
    node.parent = parent;
  }

  let middle: number = Math.floor((start + end) / 2);
  let node: BinaryTreeNode = new BinaryTreeNode(arr[middle]);
  node.parent = parent;
  node.left = btsBuilder(arr, start, middle - 1, node);
  node.right = btsBuilder(arr, middle + 1, end, node);
  return node;
}
