import { Queue } from '../queues/Queue';
import { Stack } from '../stacks/Stack';

export class BinaryTreeNode {
  val: number | string;
  left: BinaryTreeNode = null
  right: BinaryTreeNode = null
  parent: BinaryTreeNode = null

  constructor(val: number | string) {
    this.val = val;
  }

  //not optimal, just for illustration purposes
  insert(val: number | string) {
    if (this.val === null) {
      this.val == val;
      return this;
    }

    if (!this.left) {
      return this.left = new BinaryTreeNode(val);
    }

    if (!this.right) {
      return this.right = new BinaryTreeNode(val);
    }

    return this.left.insert(val);
  }

  //Depth Fist traversal inOrder, preOrder and postOrder
  traverseInOrder(): Array<any> {
    let traverse: Array<any> = [];
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    traverse.push(this.val);

    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }
    return traverse;
  }

  traverseInPreOrder(): Array<any> {
    let traverse: Array<any> = [this.val];
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInPreOrder());
    }
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInPreOrder());
    }
    return traverse;
  }

  traverseInPostOrder(): Array<any> {
    let traverse: Array<any> = [];
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInPostOrder());
    }
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInPostOrder());
    }
    traverse.push(this.val);
    return traverse;
  }

  //Breadth first traversal
  traverseInLevelOrder(): Array<any> {
    let traverse: Array<any> = [];
    let queue: Queue = new Queue();
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      let currentNode = queue.dequeue() 
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
      traverse.push(currentNode.val);
    }
    return traverse;
  }

  dfs_recursive(target: number | string): BinaryTreeNode {
    let node: BinaryTreeNode = this;
    if (node.val === target) {
      return (node)
    }
    if (node.left) {
      // return node.left.dfs_recursive(target); //I believed this to be the sames as the two lines below but no this doesn't stop the recursive call once it found the node
      let result = node.left.dfs_recursive(target);
      if (result) return result;
    }
    if (node.right) {
      // return node.right.dfs_recursive(target);
      let result = node.right.dfs_recursive(target);
      if (result) return result;
    }
    return null
  }

  dfs_iteratively(target: number | string): BinaryTreeNode {
    let stack: Stack = new Stack();
    stack.push(this);
    while (!stack.isEmpty()) {
      let crrNode: BinaryTreeNode = stack.pop();
      if (crrNode.val === target) return crrNode;
      if (crrNode.right) stack.push(crrNode.right);
      if (crrNode.left) stack.push(crrNode.left);
    }
    return null
  }

  bfs_iteratively(target: number | string): BinaryTreeNode {
    let queue: Queue = new Queue();
    queue.enqueue(this)
    while (!queue.isEmpty()) {
      let crrNode: BinaryTreeNode = queue.dequeue();
      if(crrNode.val === target) return crrNode;
      if(crrNode.left) queue.enqueue(crrNode.left);
      if(crrNode.right) queue.enqueue(crrNode.right);
    }
    return null;
  }
}

export const sampleBinaryTree = (): BinaryTreeNode => {
  let a = new BinaryTreeNode("A");
  let b = new BinaryTreeNode("B");
  let c = new BinaryTreeNode("C");
  let d = new BinaryTreeNode("D");
  let e = new BinaryTreeNode("E");
  let f = new BinaryTreeNode("F");
  let g = new BinaryTreeNode("G");
  let h = new BinaryTreeNode("H");
  let i = new BinaryTreeNode("I");
  let j = new BinaryTreeNode("J");
  let k = new BinaryTreeNode("K");

  a.left = b;
  a.right = g;

  b.left = c;
  b.right = f;
  b.parent = a;

  c.left = d;
  c.right = e;

  g.left = h;
  g.right = k;
  g.parent = a;

  h.left = i;
  h.right = j;

  //           (A)
  //     (B)       (G)
  //   (C) (F)  (H)   (K)
  // (D)(E)   (I)(J)
  return a;
}
