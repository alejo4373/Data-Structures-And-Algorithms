const permutationPalindrome = (str) => {
  str = str.toLowerCase();
  let charCount = {};
  //Keep count of all the characters of str in charCount
  //O(n)
  for(let i = 0; i < str.length; i++) {
    crrChar = str[i];
    if(crrChar !== ' ') {
      charCount[crrChar] = charCount[crrChar] + 1 || 1
    }
  }
  console.log(charCount);
  //Verify that all characters have an even count or
  //that only one character is unique
  // ---OR----
  //Verify that we did not find any character with an odd count
  //or that we found only one character with an odd count
  // -----
  //O(n) because in the worst case (all characters are unique) this will run as many times
  //as characters in str
  let uniqueOddChar = 0;
  for(key in charCount) {
    if(charCount[key] %2 !== 0 ) {
      uniqueOddChar += 1;
    }
  }

 return uniqueOddChar < 2 
}

console.log(permutationPalindrome('abxba'))
console.log(permutationPalindrome('axbba'))
console.log(permutationPalindrome('abeaba'))
console.log(permutationPalindrome('ab    ba'))
console.log(permutationPalindrome('Tact Coa'))