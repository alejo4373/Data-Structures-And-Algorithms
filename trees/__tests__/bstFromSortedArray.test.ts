import { btsBuilder } from '../bstFromSortedArray'
import { sampleBinaryTree, sampleBinarySearchTree, sampleBinaryNonSearchTree } from '../BinaryTreeNode';
import { binarySearch, validBST, findSmallest, findLargest } from '../BinarySearch';

describe('bstFromSortedArray', () => { 
  it('Returns a binary search tree out of an array', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let rootNode = btsBuilder(values);
    expect(rootNode.val).toBe(5);
    expect(rootNode.left.val).toBe(2);
    expect(rootNode.right.val).toBe(8);

    let traversedInOrder = rootNode.traverseInOrder();
    expect(traversedInOrder).toEqual(values)
  })

  it('Verifies nodes have parent property set properly', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let rootNode = btsBuilder(values);
    expect(binarySearch(rootNode, 1).parent.val).toBe(2);
    expect(binarySearch(rootNode, 9).parent.val).toBe(8);
  })

  it.only('Verifies if a given tree is a BST or not', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let bts = btsBuilder(values);
    let charactersBts = sampleBinarySearchTree();
    let charactersNonBts = sampleBinaryTree(); 

    expect(validBST(bts)).toBe(true);
    expect(validBST(charactersBts)).toBe(true);
    expect(validBST(charactersNonBts)).toBe(false);
    expect(validBST(sampleBinaryNonSearchTree())).toBe(false);
  })

  it('finds smallest and largest on a BST', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let bts = btsBuilder(values);
    expect(findSmallest(bts).val).toBe(1);
    expect(findLargest(bts).val).toBe(10);
  });
})

