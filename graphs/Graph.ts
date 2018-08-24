import { Queue } from "../queues/Queue";

//Page 107 CTCI
export class Graph {
  nodes: Array<GraphNode> = []
  constructor(nodes: Array<GraphNode>) {
    this.nodes = nodes;
  }
}

export class GraphNode {
  value: string | number;
  adjacentNodes: Array<GraphNode> = [];
  visited: boolean = false;
  constructor(value: string | number, adjacentNodes: Array<GraphNode> = []) {
    this.value = value;
    this.adjacentNodes = adjacentNodes;
  }
}

let node0 = new GraphNode(0);
let node1 = new GraphNode(1);
let node2 = new GraphNode(2);
let node3 = new GraphNode(3);
let node4 = new GraphNode(4);
let node5 = new GraphNode(5);

node0.adjacentNodes = [node1, node4, node5]
node1.adjacentNodes = [node3, node4]
node3.adjacentNodes = [node2, node4];

let nodes = [node0, node1, node2, node3, node4, node5];
let myGraph = new Graph(nodes);

const dfs = (root: GraphNode): void => {
  if (root === null) return null;
  console.log(root.value);
  root.visited = true;
  root.adjacentNodes.forEach((n) => {
    if (!n.visited) {
      dfs(n)
    }
  })
}

const bfs = (root: GraphNode): void => {
  let queue = new Queue(root);
  root.visited = true;
  while (!queue.isEmpty()) {
    let node = queue.peek().data;
    console.log(node.value);
    node.adjacentNodes.forEach((n) => {
      if (!n.visited) {
        n.visited = true;
        queue.enqueue(n)
      }
    });
    queue.dequeue();
  }
}

const availablePathBetweenNodes = (graph: Graph, start: GraphNode, end: GraphNode): boolean => {
  if (start === end) return true;
  start.visited = true;
  let queue = new Queue(start);
  while (!queue.isEmpty()) {
    let node = queue.peek().data;
    for (let i = 0; i < node.adjacentNodes.length; i++) {
      let n = node.adjacentNodes[i]
      if (n === end) return true;
      if (!n.visited) {
        n.visited = true;
        queue.enqueue(n);
      }
    }
    queue.dequeue();
  }
  return false;
}

// dfs(myGraph.nodes[0]);
// console.log('=====')
// myGraph.nodes.forEach(n => n.visited = false);
// bfs(myGraph.nodes[0]);
// console.log(availablePathBetweenNodes(myGraph, node0, node3))
console.log(availablePathBetweenNodes(myGraph, node3, node0))
