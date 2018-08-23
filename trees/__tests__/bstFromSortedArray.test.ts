import { btsBuilder } from '../bstFromSortedArray'
const values: Array<number> = [1, 5, 8, 10, 12, 15, 20, 22, 25, 28, 30, 36, 38, 40, 45, 48, 50]

describe('bstFromSortedArray', () => { 
  it('Returns a binary search tree out of an array', () => {
    const values: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let rootNode = btsBuilder(values);
    rootNode.traverseInOrder();
    expect(rootNode.val).toBe(5);
    expect(rootNode.left.val).toBe(2);
    expect(rootNode.right.val).toBe(8);
  })
})

