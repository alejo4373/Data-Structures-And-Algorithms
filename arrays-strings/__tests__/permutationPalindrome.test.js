let permutationPalindrome = require('../permutationPalindrome');

test('returns true for all of these', () => {
  expect(permutationPalindrome('Tact Coa')).toBe(true)
  expect(permutationPalindrome('abxba')).toBe(true)
  expect(permutationPalindrome('axbba')).toBe(true)
  expect(permutationPalindrome('ab    ba')).toBe(true)
})

test('returns false for all of these', () => {
  expect(permutationPalindrome('abeaba')).toBe(false)
  expect(permutationPalindrome('zzaahk')).toBe(false)
})
