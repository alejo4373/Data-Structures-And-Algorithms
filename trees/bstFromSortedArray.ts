import { BinaryTreeNode } from './BinaryTreeNode';

export const btsBuilder = (arr: Array<number>, start: number = 0, end: number = arr.length - 1): BinaryTreeNode => {
  if (end < start) {
    return null;
  }
  if (end === start) {
    return new BinaryTreeNode(arr[start]);
  }
  let middle: number = Math.floor((start + end) / 2);
  let node: BinaryTreeNode = new BinaryTreeNode(arr[middle]);
  node.left = btsBuilder(arr, start, middle - 1);
  node.right = btsBuilder(arr, middle + 1, end);
  return node;
}
