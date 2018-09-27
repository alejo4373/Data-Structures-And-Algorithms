import { BinaryTreeNode, sampleBinarySearchTree } from '../BinaryTreeNode';
import { findDepthOfTree } from '../findDepthOfTree';
import { btsBuilder } from '../bstFromSortedArray';

it('depthOfTree', () => {
  const binaryTreeDepth3: BinaryTreeNode = sampleBinarySearchTree();
  expect(findDepthOfTree(binaryTreeDepth3)).toBe(3);

  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let bts = btsBuilder(values);
  expect(findDepthOfTree(bts)).toBe(3);
})