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

export const findSmallest = (root: BinaryTreeNode): BinaryTreeNode => {
  if(root === null) { return null };
  if(!root.left) { return root };
  let node = root.left;
  while(node.left !== null) {
    node = node.left;
  }
  return node;
}

export const findLargest = (root: BinaryTreeNode): BinaryTreeNode => {
  if(root === null) { return null };
  if(!root.right) { return root };
  let node = root.right;
  while(node.right !== null) {
    node = node.right;
  }
  return node;
}

export const validBST = (root: BinaryTreeNode): boolean => {
  if(root === null) { return false };
  if(root.left) {
    let leftSideLargest = findLargest(root.left).val
    if(root.left.val > root.val || leftSideLargest > root.val) {
      return false;
    } 
    validBST(root.left);
  }
  if(root.right) {
    let rightSideSmallest = findSmallest(root.right).val
    if(root.right.val < root.val || rightSideSmallest < root.val) {
      return false;
    }
    validBST(root.right);
  }
  return true;
}