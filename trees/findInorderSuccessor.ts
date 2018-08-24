import { BinaryTreeNode } from "./BinaryTreeNode";

export const findInorderSuccessor = (node: BinaryTreeNode): BinaryTreeNode => {
  if (node === null) return null;
  if (node.right) {
    return leftMostChild(node.right);
  } else {
    let parent = node.parent;
    while (parent !== null) {
      if (parent.left === node) {
        return parent;
      }
      node = parent;
      parent = parent.parent;
    }
    return null;
  }
}

export const leftMostChild = (node: BinaryTreeNode) => {
  if (node === null) return null;
  while (node.left) {
    node = node.left;
  }
  return node;
}