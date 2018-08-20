import { Queue } from '../queues/Queue';
import { Stack } from '../stacks/Stack';

export class BinaryTreeNode {
  val: number | string;
  left: BinaryTreeNode = null
  right: BinaryTreeNode = null

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
  traverseInOrder(): void {
    if (this.left) {
      this.left.traverseInOrder();
    }

    console.log(this.val);

    if (this.right) {
      this.right.traverseInOrder();
    }
  }

  traverseInPreOrder(): void {
    console.log(this.val);
    if (this.left) {
      this.left.traverseInPreOrder();
    }
    if (this.right) {
      this.right.traverseInPreOrder();
    }
  }

  traverseInPostOrder(): void {
    if (this.left) {
      this.left.traverseInPostOrder();
    }
    if (this.right) {
      this.right.traverseInPostOrder();
    }
    console.log(this.val);
  }
  //Breadth first traversal
  traverseInLevelOrder(): void {
    let queue: Queue = new Queue(this);;
    while (!queue.isEmpty()) {
      let currentNode = queue.peek().data //Should fix queue implementation so that .data is not necessary
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
      queue.dequeue();
      console.log(currentNode.val);
    }
  }

  dfs_recursive(target: number | string): BinaryTreeNode {
    let node: BinaryTreeNode = this;
    if (node.val === target) {
      console.log('found it')
      return (node)
    }
    if (node.left) {
      console.log('left')
      // return node.left.dfs_recursive(target); //I believed this to be the sames as the two lines below but no this doesn't stop the recursive call once it found the node
      let result = node.left.dfs_recursive(target);
      if (result) return result;
    }
    if (node.right) {
      console.log('right')
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
  }

  bfs_iteratively(target: number | string): BinaryTreeNode {
    let queue: Queue = new Queue(this);
    console.log(queue)
    while (!queue.isEmpty()) {
      let crrNode: BinaryTreeNode = queue.peek().data;
      if(crrNode.val === target) return crrNode;
      if(crrNode.left) queue.enqueue(crrNode.left);
      if(crrNode.right) queue.enqueue(crrNode.right);
      queue.dequeue();
    }
  }
}


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

c.left = d;
c.right = e;

g.left = h;
g.right = k;

h.left = i;
h.right = j;

//           (A)
//     (B)       (G)
//   (C) (F)  (H)   (K)
// (D)(E)   (I)(J)


// console.log('InOrder ==>')
// root.traverseInOrder()
// console.log('InPreOrder ==>')
// root.traverseInPreOrder()
// console.log('InPostOrder ==>')
// a.traverseInPostOrder()
// console.log(root)
// a.traverseInLevelOrder();
// console.log(a.dfs_recursive('F'))
// console.log('====')
// console.log(a.bfs_iteratively('F'))