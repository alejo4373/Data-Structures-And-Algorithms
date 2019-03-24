// Design an algorithm to print all permutations of a string. For simplicity, assume
// all characters are unique.

const insert = (char: string, str: string): Array<string> => {
  let result = []
  for (let i = 0; i <= str.length; i++) {
    result.push(str.slice(0, i) + char + str.slice(i));
  }
  return result;
}

const allPermutationOfString = (str: string): Array<string> => {
  if (str.length === 1) {
    return [str];
  } else {
    let lastChar: string = str.substr(-1);
    let prevList: Array<string> =  allPermutationOfString(str.substr(0, str.length - 1))
    let result = [];
    for (let i = 0; i < prevList.length; i++) {
      result = result.concat(insert(lastChar, prevList[i]))
    }
    return result;
  }
}

console.log(allPermutationOfString("abc"))
