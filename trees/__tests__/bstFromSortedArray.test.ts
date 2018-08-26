import { btsBuilder } from '../bstFromSortedArray'
import { BinaryTreeNode } from '../BinaryTreeNode';
import { binarySearch } from '../BinarySearch';

describe('bstFromSortedArray', () => { 
  it('Returns a binary search tree out of an array', () => {
    const values: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let rootNode: BinaryTreeNode = btsBuilder(values);
    expect(rootNode.val).toBe(5);
    expect(rootNode.left.val).toBe(2);
    expect(rootNode.right.val).toBe(8);

    let traversedInOrder: Array<any> = rootNode.traverseInOrder();
    expect(traversedInOrder).toEqual(values)
  })

  it('Verifies nodes have parent property set properly', () => {
    const values: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let rootNode: BinaryTreeNode = btsBuilder(values);
    expect(binarySearch(rootNode, 1).parent.val).toBe(2);
    expect(binarySearch(rootNode, 9).parent.val).toBe(8);
  })
})

