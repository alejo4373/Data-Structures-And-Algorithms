const coinChange = (coins, amount) => {
  let answers = new Array(amount + 1)
  answers.fill(Infinity)
  answers[0] = 0
  for (let subCoin = 1; subCoin < answers.length; subCoin++) {
    for (let coin of coins) {
      let remainder = subCoin - coin

      if (remainder < 0) continue

      let prevAnswer = answers[remainder]
      answers[subCoin] = Math.min(prevAnswer + 1, answers[subCoin])
    }
  }
  return answers[amount]
}

console.log(coinChange([1, 2, 5], 11))
