import { BinaryTreeNode } from './BinaryTreeNode'
import { Stack } from '../stacks/Stack';

// https://en.wikipedia.org/wiki/Depth-first_search
//           (10)
//     (8)        (15)
//   (6) (9)  (13)   (17)
// (5)(7)     (11)(14)
let a = new BinaryTreeNode(10);
let b = new BinaryTreeNode(8);
let c = new BinaryTreeNode(6);
let d = new BinaryTreeNode(5);
let e = new BinaryTreeNode(7);
let f = new BinaryTreeNode(9);
let g = new BinaryTreeNode(15);
let h = new BinaryTreeNode(13);
let i = new BinaryTreeNode(11);
let j = new BinaryTreeNode(14);
let k = new BinaryTreeNode(17);

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

const binarySearch = (root: BinaryTreeNode, target: number | string): BinaryTreeNode => {
  if (root.val === target) {
    return root;
  }

  if (target > root.val) {
    if (root.right) {
      return binarySearch(root.right, target)
    }
  } else if (target < root.val) {
    if (root.left) {
      return binarySearch(root.left, target)
    }
  }
}

const binarySearchIteratively = (root: BinaryTreeNode, target: number | string): BinaryTreeNode => {
  let stack: Stack = new Stack();
  stack.push(root)
  while (!stack.isEmpty()) {
    let crrNode = stack.pop();
    if(crrNode.val === target) {
      return crrNode;
    } else if(target < crrNode.val) {
        if(crrNode.left) {
          stack.push(crrNode.left)
        }
    } else if(target > crrNode.val) {
        if(crrNode.right) {
          stack.push(crrNode.right);
        }
    }
  }
}

console.log(binarySearch(a, 7))
console.log(binarySearchIteratively(a, 7))