const findMinNumOfBribes = (arr) => {
  let bribes = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] - (i + 1) > 2) {
      return 'Too chaotic'
    }

    for (let j = Math.max(0, arr[i] - 2); j < i; j++) {
      if (arr[j] > arr[i]) {
        bribes++
      }
    }
  }
  return bribes
}

console.log(findMinNumOfBribes([2, 1, 5, 3, 4])) // 3
console.log(findMinNumOfBribes([1, 2, 5, 3, 7, 8, 6, 4])) // 7
