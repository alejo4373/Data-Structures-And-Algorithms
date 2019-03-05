const sumArray = (a: Array<number>): number => {
  return a.reduce((sum: number, crr: number) => sum += crr); 
}

const subsetSum = (a: Array<number>, s: number): Boolean => {
  if(sumArray(a) === s) {
    return true;
  } 
  
  for (let i: number = 0; i < a.length && a.length > 1; i++) {
    let subArray: Array<number>;
    // Leave current element out
    subArray = a.slice(0, i).concat(a.slice(i + 1));
    if(subsetSum(subArray, s)) {
      return true;
    }
  }
  return false;
}

export default subsetSum;
