const maxProfit = (ticketSellers: number[], sells: number): number => {
  const sorted: number[] = ticketSellers.sort((a, b) => b - a)
  let profit: number = 0;
  let i: number = 0;
  while (i < ticketSellers.length - 1 && sells > 0) {
    let crr: number = ticketSellers[i]
    let next: number = ticketSellers[i + 1]
    console.log({ crr, next, profit })
    while (crr > next) {
      profit += crr;
      crr -= 1;
      sells -= 1
    }
    i++
  }
  console.log(sorted)
  return profit
}

console.log(maxProfit([3, 5], 6))// 19
// console.log(maxProfit([2, 8, 4, 10, 6], 20))// 110
export default maxProfit
