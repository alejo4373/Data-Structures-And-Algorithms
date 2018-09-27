import { BinaryTreeNode } from './BinaryTreeNode';

export const findDepthOfTree = (n: BinaryTreeNode): number => {
  if (!n || (!n.left && !n.right)) {
    return 0
  }
  const leftDepth: number = findDepthOfTree(n.left);
  const rightDepth: number = findDepthOfTree(n.right);
  const largest: number = leftDepth > rightDepth ? leftDepth : rightDepth;
  return largest + 1;
};