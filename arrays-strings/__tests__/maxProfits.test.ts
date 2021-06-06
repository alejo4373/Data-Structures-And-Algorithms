import maxProfits from '../maxProfit';

describe('maxProfits.js', () => {

  test('should find max profit possible', () => {
    expect(maxProfits([3, 5], 6)).toBe(19)
    expect(maxProfits([2, 5], 4)).toBe(14)
    expect(maxProfits([2, 8, 4, 10, 6], 20)).toBe(110)
  })

})

