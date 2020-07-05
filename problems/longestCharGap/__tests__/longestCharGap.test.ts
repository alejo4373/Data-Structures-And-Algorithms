import { longestCharGap } from '../longestCharGap'

describe("longestCharGap", () => {
  test('Input: "ABCXYCPQMBAC", Output: 9', () => {
    expect(longestCharGap("ABCXYCPQMBAC")).toBe(9)
  })

  test('No gaps or gaps of length 0', () => {
    expect(longestCharGap("")).toBe(0)
    expect(longestCharGap("A")).toBe(0)
    expect(longestCharGap("GG")).toBe(0)
    expect(longestCharGap("XXXXXXXXXXXXXXXXXXXX")).toBe(0)
    expect(longestCharGap("asdfghjklqwertyuiopzxcvbnm")).toBe(0)
    expect(longestCharGap("aassddffgghhjjkkllqqwweerrttyyuuiiooppzzxxccvvbbnnmm")).toBe(0)
  })

  test('Second smallest possible gap', () => {
    expect(longestCharGap("POP")).toBe(1)
  })

  test('Second smallest possible gap', () => {
  })
})
