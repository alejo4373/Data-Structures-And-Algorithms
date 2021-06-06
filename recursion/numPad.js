/*
# Given a keypad as shown in diagram, and a n digit number, list all words which are possible by 
# pressing these numbers.
# |------------------|
# |                  |
# |       abc   def  |
# |  1     2     3   |
# |                  |
# | ghi   jkl   mno  |
# |  4     5     6   |
# |                  |
# | pqrs  tuv   wxyz |
# |  7     8     9   |
# |                  |
# |------------------|
#
#
# For example if input number is 234, possible words which can be formed are (Alphabetical order):
# adg adh adi aeg aeh aei afg afh afi bdg bdh bdi beg beh bei bfg bfh bfi cdg cdh cdi ceg ceh cei 
# cfg cfh cfi
*/

const listWords = ["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"]

console.log('Hard solution:', listWords)


/*
solution(nums)
  words = []
  for i, num of nums
    backtrack(path, i) 
      if path.length === nums.length; words.push(path)
      chars = keyMap[nums[i]] //def
      for char of chars
        backtrack(path + char, i + 1) 
    backtrack("", 0)
        
      
solution("234")

bt("ad",2)
bt("a",1)
bt("", 0)
*/
const keyMap = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz"
}

const solution = (nums) => {
  let words = []

  const backtrack = (path, i) => {
    if (path.length === nums.length) {
      words.push(path)
      return;
    }
    const chars = keyMap[nums[i]] //def

    for (let char of chars) {  // O (x), x = length longest value in map. 
      backtrack(path + char, i + 1)
    }
  }

  backtrack("", 0)
  return words
}

// O(x^n * n) time complexity. x = length longest value in map & n = nums.length
console.log('Solution', solution("234"))

/*
bt("ad",2)
bt("a",1)
bt("", 0)

*/


