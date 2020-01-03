import { flattenArray } from '../flattenArray';

describe('Algorithm to flatten an array of arrays', () => {
  it('Flattens an array', () => {
    const arr = [1, [2, 3], [[[4], [5, 6], 7, 8], [9]], [10, 11, 12, 13], [[14], [15], [16], [[[[[17], 18]]]]]]
    const flat = flattenArray(arr);
    expect(flat).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
  })

  it('Flattens a smaller array', () => {
    const arr = [1, [2, 3], [[[4], [5, 6], 7, 8], [9]]]
    expect(flattenArray(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('Flattens a small but more nested array', () => {
    const arr = [1, [2, 3], [[[4], [5, 6], [7, [8, [9], 10]], [11]]]]
    expect(flattenArray(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  })

  it('Flattens a left half of an onion array', () => {
    const arr = [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]
    expect(flattenArray(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('Flattens a right half of an  onion array', () => {
    const arr = [[[[[[[[[1], 2], 3], 4], 5], 6], 7], 8], 9]
    expect(flattenArray(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('Flattens an onion array', () => {
    const arr = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10], 11], 12], 13], 14], 15], 16], 17], 18], 19]
    expect(flattenArray(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
  })

  it('Works for empty arrays', () => {
    const flat = flattenArray([]);
    expect(flat).toEqual([])
  })

  it('Works for single element arrays', () => {
    const flat = flattenArray([1]);
    expect(flat).toEqual([1])
  })

  it('Works for an already flat array', () => {
    const flat = flattenArray([1, 2, 3]);
    expect(flat).toEqual([1, 2, 3])
  })
})
