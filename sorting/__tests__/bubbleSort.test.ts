import { bubbleSort, bubbleSort2 } from '../bubbleSort';

describe('Bubble Sort', () => {
  it('bubbleSort sorts an array', () => {
    const arr = [2, 5, 7, 6, 9, 0, 1]
    expect(bubbleSort(arr)).toEqual([0, 1, 2, 5, 6, 7, 9])
  })

  it('bubbleSort2  sorts an array', () => {
    const arr = [2, 5, 7, 6, 9, 0, 1]
    expect(bubbleSort(arr)).toEqual([0, 1, 2, 5, 6, 7, 9])
  })

  it('both bubbleSort produce the same result', () => {
    const arr = [2, 5, 7, 6, 9, 0, 1]
    expect(bubbleSort(arr)).toEqual(bubbleSort2(arr))
  })

  it('bubbleSort sorts a reverse sorted array', () => {
    const arr = [9, 7, 6, 5, 2, 1, 0]
    expect(bubbleSort(arr)).toEqual([0, 1, 2, 5, 6, 7, 9])
  })

  it('bubbleSort2 sorts a reverse sorted array', () => {
    const arr = [9, 7, 6, 5, 2, 1, 0]
    expect(bubbleSort2(arr)).toEqual([0, 1, 2, 5, 6, 7, 9])
  })

  it('bubbleSort sorts a small arr', () => {
    const arr = [9, 7]
    expect(bubbleSort(arr)).toEqual([7, 9])
  })
})
