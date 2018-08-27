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
    if (crrNode.val === target) {
      return crrNode;
    } else if (target < crrNode.val) {
      if (crrNode.left) {
        stack.push(crrNode.left)
      }
    } else if (target > crrNode.val) {
      if (crrNode.right) {
        stack.push(crrNode.right);
      }
    }
  }
}

export const findSmallest = (root: BinaryTreeNode): BinaryTreeNode => {
  if (root === null) { return null };
  if (!root.left) { return root };
  let node = root.left;
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}

export const findLargest = (root: BinaryTreeNode): BinaryTreeNode => {
  if (root === null) { return null };
  if (!root.right) { return root };
  let node = root.right;
  while (node.right !== null) {
    node = node.right;
  }
  return node;
}

export const validBST = (root: BinaryTreeNode): boolean => {
  if (root === null) { return false };
  if (root.left) {
    let leftSideLargest = findLargest(root.left).val
    if (root.left.val > root.val || leftSideLargest > root.val) {
      return false;
    }
    validBST(root.left);
  }
  if (root.right) {
    let rightSideSmallest = findSmallest(root.right).val
    if (root.right.val < root.val || rightSideSmallest < root.val) {
      return false;
    }
    validBST(root.right);
  }
  return true;
}

// CTCI page 246
// Leverages in order traversal keeping track of the last element viewed and
// making sure such element is always less that the 'current' element
let lastViewed = null;
export const checkBSTInOrder = (n: BinaryTreeNode): boolean => {
  if (n === null) { return true };
  if (!checkBSTInOrder(n.left)) { return false };
  if (lastViewed !== null && n.val <= lastViewed) {
    return false
  }
  lastViewed = n.val;
  if (!checkBSTInOrder(n.right)) { return false };
  return true;
}

// CTCI page 248
// Leverages keeping track of the possible min and max value allowed 
// for the left and right branch updating the max when we branch left and
// updating the min when we branch right 
export const checkBSTMinMax = (n: BinaryTreeNode, min: number | string = null, max: number | string = null): boolean => {
  if (n === null) { return true };
  if ((min !== null && n.val <= min) || (max !== null && n.val > max)) {
    return false;
  }
  if (!checkBSTMinMax(n.left, min, n.val) || !checkBSTMinMax(n.right, n.val, max)) {
    return false;
  }
  return true;

}