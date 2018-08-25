import { Queue } from "../queues/Queue";

//Page 107 CTCI
export class Graph {
  nodes: Array<GraphNode> = []

  constructor(nodes: Array<GraphNode>) {
    this.nodes = nodes;
  }

  cleanUp = (): void => {
    this.nodes.forEach(n => n.visited = false);
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

export const buildSampleGraph = (): Graph => {
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
  return new Graph(nodes);
}

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
  let queue = new Queue();
  root.visited = true;
  queue.enqueue(root)
  while (!queue.isEmpty()) {
    let node = queue.dequeue();
    console.log(node.value);
    node.adjacentNodes.forEach((n) => {
      if (!n.visited) {
        n.visited = true;
        queue.enqueue(n)
      }
    });
  }
}

export const availablePathBetweenNodes = (start: GraphNode, end: GraphNode): boolean => {
  if (start === end) return true;
  let queue = new Queue();
  start.visited = true;
  queue.enqueue(start);

  while (!queue.isEmpty()) {
    let node = queue.dequeue();
    for (let i = 0; i < node.adjacentNodes.length; i++) {
      let n = node.adjacentNodes[i]
      if (n === end) return true;
      if (!n.visited) {
        n.visited = true;
        queue.enqueue(n);
      }
    }
  }
  return false;
}
