import { Queue } from '../queues/Queue';

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

}


let root = new BinaryTreeNode(1);
for (let i = 2; i < 7; i++) {
  root.insert(i);
}
// console.log('InOrder ==>')
// root.traverseInOrder()
// console.log('InPreOrder ==>')
// root.traverseInPreOrder()
// console.log('InPostOrder ==>')
// root.traverseInPostOrder()
// console.log(root)
root.traverseInLevelOrder();