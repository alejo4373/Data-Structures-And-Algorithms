import { sampleBinarySearchTree, BinaryTreeNode } from './BinaryTreeNode';

const binaryTree: BinaryTreeNode = sampleBinarySearchTree();
//           (F)
//     (D)       (J)
//   (B) (E)  (H)   (K)
// (A)(C)   (G)(I)

const findMaxDepth = (n: BinaryTreeNode): number => {
  if (!n.left && !n.right) {
    return 0
  }
  const leftDepth: number = findMaxDepth(n.left);
  const rightDepth: number = findMaxDepth(n.right);
  const largest: number = leftDepth > rightDepth ? leftDepth : rightDepth;
  return largest + 1;
};

console.log(findMaxDepth(binaryTree));


