import { sampleBinaryTree } from '../BinaryTreeNode';

describe('BinaryTreeNode', () => {
  it('traverseInOrder', () => {
    let root = sampleBinaryTree();
    expect(root.traverseInOrder()).toEqual(["D", "C", "E", "B", "F", "A", "I", "H", "J", "G", "K"])
  });

  it('traverseInPreOrder', () => {
    let root = sampleBinaryTree();
    expect(root.traverseInPreOrder()).toEqual(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]);
  });

  it('traverseInPostOrder', () => {
    let root = sampleBinaryTree();
    expect(root.traverseInPostOrder()).toEqual(["D", "E", "C", "F", "B", "I", "J", "H", "K", "G", "A"]);
  });

  it('traverseInLevelOrder', () => {
    let root = sampleBinaryTree();
    expect(root.traverseInLevelOrder()).toEqual(["A", "B", "G", "C", "F", "H", "K", "D", "E", "I", "J"]);
  });

  it('DFS recursive and iterative finds node with val and returns null when not found', () => {
    let root = sampleBinaryTree();
    expect(root.dfs_recursive('F').val).toBe('F');
    expect(root.dfs_recursive('Z')).toBeNull();

    expect(root.dfs_iteratively('K').val).toBe('K');
    expect(root.dfs_iteratively('Z')).toBeNull();
  });

  it('BFS iteratively finds node by val and returns null when not found', () => {
    let root = sampleBinaryTree();
    expect(root.bfs_iteratively('D').val).toBe('D');
    expect(root.bfs_iteratively('X')).toBeNull();
  });

})