import subsetSum from '../subset-sum';

describe("Subset sum", () => {
  it("a = [3, 5, 1, 8, 2], s = 12 ===> true", () => {
    expect(subsetSum([3, 5, 1, 8, 2], 12)).toBe(true);
  });

  it("a = [1], s = 1 ===> true", () => {
    expect(subsetSum([1], 1)).toBe(true);
  });

  it("a = [100, 1, 2, 3, 5, 6, 100], s = 200 ===> true", () => {
    expect(subsetSum([100, 1, 2, 3, 5, 6, 100], 1)).toBe(true);
  });

  it("a = [100, 1, 2, 3, 5, 6, 100], s = 60 ===> false", () => {
    expect(subsetSum([100, 1, 2, 3, 5, 6, 100], 60)).toBe(false);
  });

  it("a = [100, 1, 2, 3, 8, 6, 100], s = 5 ===> false", () => {
    expect(subsetSum([100, 1, 2, 3, 8, 6, 100], 5)).toBe(true);
  });

});
