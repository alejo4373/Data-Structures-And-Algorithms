const coinChangeMain = (coins, amount) => {
  if (amount < 1) return 0;
  let memo = new Array(amount)
  memo.fill(0)
  return coinChange(coins, amount, memo);
}

  let min = Infinity;
const coinChange = (coins, rem, memo) => {
  if (rem < 0) return -1;
  if (rem === 0) return 0;

  // If we already calculated that value
  // if (memo[rem - 1] !== 0) return memo[rem - 1];
  
  // let min = Infinity;

  for (let coin of coins) {
    let res = coinChange(coins, rem - coin, memo);
    min = Math.min(min, 1 + res)
    // if (res >= 0 && res < min)
      // min = 1 + res;
  }
  
  // memo[rem - 1] = (min === Infinity) ? -1 : min;
  
  // return memo[rem - 1];
  return min
}

console.log(coinChangeMain([1, 2, 5], 11))
