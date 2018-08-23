import { BinaryTreeNode } from './BinaryTreeNode';

const values: Array<number> = [1, 5, 8, 10, 12, 15, 20, 22, 25, 28, 30, 36, 38, 40, 45, 48, 50]
const values2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const btsBuilder = (arr: Array<number>, start: number = 0, end: number = arr.length - 1): BinaryTreeNode => {
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

console.log(btsBuilder(values));
let a = btsBuilder(values2);
a.traverseInOrder();