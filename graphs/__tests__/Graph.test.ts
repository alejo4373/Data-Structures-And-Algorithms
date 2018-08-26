import { buildSampleGraph, availablePathBetweenNodes, dfs, bfs} from '../Graph';

describe('Graph data structure', () => {
  it('Builds a Graph data structure with 6 node', () => {
    let myGraph = buildSampleGraph();
    expect(myGraph.nodes.length).toBe(6);
    expect(myGraph.nodes[0].value).toBe(0);
  });

  it('availablePathBetweenNodes', () => {
    let myGraph = buildSampleGraph();
    let node0 = myGraph.nodes[0];
    let node2 = myGraph.nodes[2]
    let node3 = myGraph.nodes[3];
    // expect(node0.adjacentNodes[0].adjacentNodes[0]).toBe(node3)
    // expect(node0.adjacentNodes[0].adjacentNodes[0].adjacentNodes[0]).toBe(node2)
    // expect(node3).toBe({})
    expect(availablePathBetweenNodes(node0, node3)).toBe(true);
    myGraph.cleanUp();
    expect(availablePathBetweenNodes(node3, node0)).toBe(false);
    myGraph.cleanUp();
    expect(availablePathBetweenNodes(node0, node2)).toBe(true);
  });

  it('DFS returns array in DFS order', () => {
    let myGraph = buildSampleGraph();
    let rootNode = myGraph.nodes[0];
    expect(dfs(rootNode)).toEqual([0, 1, 3, 2, 4, 5])
  })

  it('BFS returns array in BFS order', () => {
    let myGraph = buildSampleGraph();
    let rootNode = myGraph.nodes[0];
    expect(bfs(rootNode)).toEqual([0, 1, 4, 5, 3, 2])
  })
})