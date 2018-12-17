// Find the largest gap constructed of 0s (between 1s) of the binary
// representation of a number n, which is in the range [1...2,147,483,647]
export const findLargestBinaryGap = (n: number): number => {
  let largestGapCount: number = 0;
  let crrGapCount: number = 0;
  let gapStarted: boolean = false;

  while (n > 0) {
    // Every time we see a reminder we know that a gap started/ended
    // and therefore need to check if we have a crr count that is 
    // larger than the largest gap seen so far. Resetting the crr
    // count is also necessary
    if (n % 2) {
      gapStarted = true;
      if (crrGapCount > largestGapCount) {
        largestGapCount = crrGapCount;
      }
      crrGapCount = 0;
    } else {
      // If we haven't seeing a one (1) then don't count the 0s
      // towards the gap count/length
      if (gapStarted) {
        crrGapCount++;
      }
    }
    n = Math.floor(n / 2);
  }
  return largestGapCount;
}
