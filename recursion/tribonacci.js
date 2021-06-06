var tribonacci = function (n) {
  let memo = {
    0: 0,
    1: 1,
    2: 1
  }
  return tri(n, memo)
};

const tri = (n, memo) => {
  if (n in memo) return memo[n]
  let res = tri(n - 3, memo) + tri(n - 2, memo) + tri(n - 1, memo) 
  memo[n] = res
  console.log(memo)
  return res
}

console.log(tribonacci(37))

