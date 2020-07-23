// Dynamic Programming Fibonacci 

// What is the Fibonacci sequence?  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, ...
// F(0) = 0
// F(1) = 1
// F(2) = 1
// F(3) = F(2) + F(1) => 2
// F(4) = F(3) + F(2) => 3
// F(x) = F(x - 1) + F(x - 2)

// Top Down without memo 
// Time Complexity O(2^n)
const fib = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1

  return fib(n - 1) + fib(n - 2)
}

// console.log(fib(25)) // 75025

// Top Down Approach with memo 
// Time Complexity O(n)
const fibMemo = (n, memo) => {
  if (n === 0) return 0
  if (n === 1) return 1
  if (memo[n]) return memo[n]

  let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo)
  memo[n] = res
  return res
}

// console.log(fibMemo(25, {})) // 75025

// Bottom Up Approach O(n)
const fib2 = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let memo = [0, 1];
  for (let i = 2; i < n; i++) {
    memo.push(memo[i - 1] + memo[i - 2])
  } 
  return memo[n - 1] + memo[n -2]
}

// console.log(fib2(25)) // 75025

const logPerf = (fn, n) => {
  const start = new Date();
  const result = fn(n);
  const end = new Date();
  console.log(`fib(${n}) = ${result}. Took ${end - start}ms`);
}

const logPerf2 = (fn, n, memo) => {
  const start = new Date();
  const result = fn(n, memo);
  const end = new Date();
  console.log(`fibMemo(${n}) = ${result}. Took ${end - start}ms`);
}

// Disable internal optimization of node (V8 engine)
%NeverOptimizeFunction(fib) // Make sure to execute with: node --allow-natives-syntax fib.js


// Watch the time it takes to complete exponentially go up.
// logPerf(fib, 0) // 0
// logPerf(fib, 1) // 1
// logPerf(fib, 2) // 1
// logPerf(fib, 3) // 2
// logPerf(fib, 4) // 3
// logPerf(fib, 5) // 5
// logPerf(fib, 6) // 8
// logPerf(fib, 8) // 21

// logPerf(fib, 25) // 75025
// logPerf(fib, 26) // 121393
// logPerf(fib, 27) // 196418
// logPerf(fib, 28) // 317811
// logPerf(fib, 29) // 514229
// logPerf(fib, 30) // 832040

// Now with Fibonacci Memoized. How does the time it took change?
logPerf2(fibMemo, 0, {}) // 0
logPerf2(fibMemo, 1, {}) // 1
logPerf2(fibMemo, 2, {}) // 1
logPerf2(fibMemo, 3, {}) // 2
logPerf2(fibMemo, 4, {}) // 3
logPerf2(fibMemo, 5, {}) // 5
logPerf2(fibMemo, 6, {}) // 8
logPerf2(fibMemo, 8, {}) // 21

logPerf2(fibMemo, 25, {}) // 75025
logPerf2(fibMemo, 26, {}) // 121393
logPerf2(fibMemo, 27, {}) // 196418
logPerf2(fibMemo, 28, {}) // 317811
logPerf2(fibMemo, 29, {}) // 514229
logPerf2(fibMemo, 30, {}) // 832040


