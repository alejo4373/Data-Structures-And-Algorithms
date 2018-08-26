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
  value: number;
  adjacentNodes: Array<GraphNode> = [];
  visited: boolean = false;
  constructor(value: number, adjacentNodes: Array<GraphNode> = []) {
    this.value = value;
    this.adjacentNodes = adjacentNodes;
  }
}

//CTCI page 107
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

//CTCI page 106
export const buildSampleNonConnectedGraph = (): Graph => {
  let node0 = new GraphNode(0);
  let node1 = new GraphNode(1);
  let node2 = new GraphNode(2);
  let node3 = new GraphNode(3);
  let node4 = new GraphNode(4);
  let node5 = new GraphNode(5);
  let node6 = new GraphNode(6);

  node0.adjacentNodes = [node1]
  node1.adjacentNodes = [node2]
  node2.adjacentNodes = [node0, node3]
  node3.adjacentNodes = [node2];

  node4.adjacentNodes = [node6]
  node5.adjacentNodes = [node4]
  node6.adjacentNodes = [node5]

  let nodes = [node0, node1, node2, node3, node4, node5, node6];
  return new Graph(nodes);
}

export const dfs = (root: GraphNode): Array<any> => {
  let traverse: Array<number> = [];
  if (root === null) return null;
  root.visited = true;
  traverse = traverse.concat(root.value)
  root.adjacentNodes.forEach((n) => {
    if (!n.visited) {
      traverse = traverse.concat(dfs(n))
    }
  })
  return traverse;
}

export const graphDfs = (graph: Graph): Array<number> => {
  let traverse: Array<number> = [];
  if (graph.nodes.length) {
    graph.nodes.forEach(n => {
      if (!n.visited) {
        traverse = traverse.concat(dfs(n));
      }
    })
  }
  return traverse;
}

export const graphBfs = (graph: Graph): Array<number> => {
  let traverse: Array<number> = [];
  if (graph.nodes.length) {
    graph.nodes.forEach(n => {
      if (!n.visited) {
        traverse = traverse.concat(bfs(n));
      }
    })
  }
  return traverse;
}

export const bfs = (root: GraphNode): Array<number> => {
  let queue = new Queue();
  let traverse: Array<number> = [];
  root.visited = true;
  queue.enqueue(root)
  while (!queue.isEmpty()) {
    let node = queue.dequeue();
    traverse.push(node.value);
    node.adjacentNodes.forEach((n) => {
      if (!n.visited) {
        n.visited = true;
        queue.enqueue(n)
      }
    });
  }
  return traverse;
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
