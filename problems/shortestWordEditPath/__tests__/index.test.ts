import shortestWordEditPath from '../index';

describe('shortestWordEditPath', () => {
  test('Find the shortest path between bit and dog', () => {
    expect(shortestWordEditPath('bit', 'dog', ["but", "put", "big", "pot", "pog", "dog", "lot"])).toBe(5)
  })
})
