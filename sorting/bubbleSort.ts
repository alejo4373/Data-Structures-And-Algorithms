export const bubbleSort = (arr) => {
  let swap = true;
  let n = arr.length - 1;
  while (swap) {
    swap = false
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
    n--
  }
  return arr;
}

/*
* Bubble Sort array using slightly optimization. 
* Since bubble sort guaranties that the greatest element will end
* up always a the end of the array on every iteration we do not 
* need to go the end of the array every time
* Does not modify the original
* array, instead a copy is made
* @param arr The array to sort
* @returns The sorted array
*/
export const bubbleSort2 = (arr: number[]): number[] => {
  const newArr: number[] = [...arr];
  for (let i = newArr.length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (newArr[j - 1] > newArr[j]) {
        let temp = newArr[j - 1];
        newArr[j - 1] = newArr[j]
        newArr[j] = temp
      }
    }
  }
  return newArr;
}

/*
* Sort array using naive sort. 
* Does not modify the original array, instead a copy is made
* @param arr The array to sort
* @returns The sorted array
*/
export const someOtherSort = (arr: number[]): number[] => {
  const newArr: number[] = [...arr];
  let i = 0;
  while (i < newArr.length) {
    let j = i;
    while (j < newArr.length) {
      if (newArr[i] > newArr[j]) {
        const temp: number = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
      j++;
    }
    i++
  }
  return newArr;
}

