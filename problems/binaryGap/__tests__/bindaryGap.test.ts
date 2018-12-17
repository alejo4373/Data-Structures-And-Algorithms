import { findLargestBinaryGap } from '../binaryGap';

it('Misses no test case', () => {
  expect(findLargestBinaryGap(9)).toBe(2);
  expect(findLargestBinaryGap(529)).toBe(4);
  expect(findLargestBinaryGap(20)).toBe(1);
  expect(findLargestBinaryGap(15)).toBe(0);
  expect(findLargestBinaryGap(32)).toBe(0);
  expect(findLargestBinaryGap(2147483647)).toBe(0);
  expect(findLargestBinaryGap(0)).toBe(0);
})
