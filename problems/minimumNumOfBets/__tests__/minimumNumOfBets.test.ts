const { minimumNumOfBets } = require('../minimumNumOfBets')

describe('minimumNumOfBets', () => {
  test('Initial examples', () => {
    expect(minimumNumOfBets(8, 0)).toBe(7)
    expect(minimumNumOfBets(18, 2)).toBe(6)
    expect(minimumNumOfBets(10, 10)).toBe(4)

  })
})
