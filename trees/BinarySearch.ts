import { BinaryTreeNode } from './BinaryTreeNode'
import { Stack } from '../stacks/Stack';

export const binarySearch = (root: BinaryTreeNode, target: number | string): BinaryTreeNode => {
  if (root.val === target) {
    return root;
  }

  if (target > root.val) {
    if (root.right) {
      return binarySearch(root.right, target)
    }
  } else if (target < root.val) {
    if (root.left) {
      return binarySearch(root.left, target)
    }
  }
}

export const binarySearchIteratively = (root: BinaryTreeNode, target: number | string): BinaryTreeNode => {
  let stack: Stack = new Stack();
  stack.push(root)
  while (!stack.isEmpty()) {
    let crrNode = stack.pop();
    if(crrNode.val === target) {
      return crrNode;
    } else if(target < crrNode.val) {
        if(crrNode.left) {
          stack.push(crrNode.left)
        }
    } else if(target > crrNode.val) {
        if(crrNode.right) {
          stack.push(crrNode.right);
        }
    }
  }
}