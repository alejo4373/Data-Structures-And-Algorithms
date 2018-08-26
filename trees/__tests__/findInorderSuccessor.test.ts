import { btsBuilder } from '../bstFromSortedArray';
import { leftMostChild, findInorderSuccessor } from '../findInorderSuccessor';
import { binarySearch } from '../BinarySearch';

describe('findInorderSuccessor', () => { 
  it('Find left most child', () => {
    const values = [1, 5, 8, 10, 12, 15, 20, 22, 25, 28, 30, 36, 38, 40, 45, 48, 50]
    let rootNode = btsBuilder(values);
    let node38 = rootNode.right; 
    expect(leftMostChild(rootNode).val).toBe(1)
    expect(leftMostChild(node38).val).toBe(28)
  })

  it('find node with value in ascending order of the given node', () => {
    const values = [1, 5, 8, 10, 12, 15, 20, 22, 25, 28, 30, 36, 38, 40, 45, 48, 50]
    let rootNode = btsBuilder(values);
    let node = binarySearch(rootNode, 36); 
    expect(findInorderSuccessor(node).val).toBe(38)

    node = binarySearch(rootNode, 28);
    expect(findInorderSuccessor(node).val).toBe(30)

    node = binarySearch(rootNode, 50);
    expect(findInorderSuccessor(node)).toBeNull()

  })
})

