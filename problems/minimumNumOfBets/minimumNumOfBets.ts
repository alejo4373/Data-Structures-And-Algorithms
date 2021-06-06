const iterative = (N, K) => {
  let rest = N
  let count = 0

  while (K > 0 && rest > 1) {
    process.stdout.write([K, rest, !!(rest % 2)].toString())
    if (rest % 2) {
      count++
    }
    rest = Math.floor(rest / 2)
    count++
    K--
    process.stdout.write(',' + count.toString() + '\n')
  }
  console.log([K, rest].toString())
  return (count + rest) - 1
}

const recursive = (N, K) => {
  if (N === 1) return 0
  if (N === 2) return 1
  let half = Math.floor(N / 2)
  if (K > 0) {
    if (N % 2) {
      return 2 + recursive(half, K - 1)
    } else {
      return 1 + recursive(half, K - 1)
    }
  } else {
    return 1 + recursive(N - 1, K)
  }
}

module.exports = {
  iterative: iterative,
  recursive: recursive
}


// console.log(allIn(8, 0)) // 7
console.log(allIn(18, 1)) // 6
// console.log(allIn(18, 2)) // 6
// console.log(allIn(18, 3)) // 5
// console.log(allIn(10, 10)) // 4

// console.log(minimumNumOfBets(2, 0)) // 1 - one bet of one chip
// console.log(minimumNumOfBets(3, 0)) // 2 => 2 bets of one + initial chip
// console.log(minimumNumOfBets(4, 1)) // 2 =>
// console.log(minimumNumOfBets(5, 1)) // 3
// console.log(minimumNumOfBets(6, 1)) // 3
// console.log(minimumNumOfBets(7, 1)) // 4
// console.log(minimumNumOfBets(8, 1)) // 4
// console.log(minimumNumOfBets(1, 0)) // 0 - no bets at all

// console.log(allIn(2, 0)) // 1 - one bet of one chip
// console.log(allIn(3, 0)) // 2 => 2 bets of one + initial chip
// console.log(allIn(4, 1)) // 2 =>
// console.log(allIn(5, 1)) // 3
// console.log(allIn(6, 1)) // 3
// console.log(allIn(7, 1)) // 4
// console.log(allIn(8, 1)) // 4
// console.log(allIn(1, 0)) // 0 - no bets at all
