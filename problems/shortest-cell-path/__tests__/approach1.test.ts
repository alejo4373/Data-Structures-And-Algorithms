import shortestCellPath from '../approach1';

describe('Shortest Cell Path of 1s in a Matrix', () => {
  test('Find the shortest path from start to target in matrix', () => {
    expect(shortestCellPath([[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]], 0, 0, 2, 0)).toBe(8)
    expect(shortestCellPath([[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]], 0, 0, 2, 0)).toBe(-1)
    expect(shortestCellPath([[0, 1, 0], [1, 0, 0], [1, 0, 1]], 2, 0, 1, 0)).toBe(1)
    expect(shortestCellPath([[1, 1, 1], [0, 0, 0], [0, 0, 0]], 0, 1, 0, 0)).toBe(1)
    expect(shortestCellPath([[1, 0, 1, 1], [1, 0, 1, 1], [0, 0, 1, 0], [0, 0, 0, 0]], 1, 3, 0, 0)).toBe(-1)
    expect(shortestCellPath([[1, 0, 1, 1, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 0, 0, 1], [1, 0, 0, 1, 1]], 0, 3, 3, 1)).toBe(-1)
    expect(shortestCellPath([[0, 1, 0, 1, 0], [1, 0, 1, 1, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 0], [0, 0, 1, 1, 1]], 3, 0, 0, 3)).toBe(-1)
    expect(shortestCellPath([[1, 1, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 1, 1], [1, 0, 0, 0, 1, 1], [1, 0, 1, 0, 1, 0], [0, 0, 0, 1, 1, 0]], 5, 4, 2, 1)).toBe(-1)
    expect(shortestCellPath([[1, 1, 0, 0, 1, 0], [1, 0, 0, 1, 1, 1], [0, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1], [0, 0, 1, 1, 0, 0]], 3, 0, 1, 3)).toBe(-1)
    expect(shortestCellPath([[1, 1], [1, 1]], 0, 0, 1, 0)).toBe(1)
  })
})
