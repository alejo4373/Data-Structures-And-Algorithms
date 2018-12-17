// Find the largest gap of constructed of 0s (between 1s) of the binary
// representation of a number n in the range [1...2,147,483,647]
export const findLargestBinaryGap = (n : number) : number => {
  let largestGapCount : number = 0;
  let crrGapCount : number = 0;
  let gapStarted : boolean = false;

  while (n > 0) {
    if (n % 2) {
      if (!gapStarted) {
        gapStarted = true
      } else {
        if (crrGapCount > largestGapCount) {
          largestGapCount = crrGapCount;
          crrGapCount = 0;
        }
      }
    } else {
      if (gapStarted) {
        crrGapCount++;
      }
    }
    n = Math.floor(n / 2);
  }
  return largestGapCount;
}
