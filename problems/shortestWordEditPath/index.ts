/**
@param source: string
@param target: string
@param words: string[]
@return: integer
*/

function shortestWordEditPath(source, target, words) {
  let edits = {}

  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      let key = word.slice(0, i) + '*' + word.slice(i + 1);
      if (key in edits) {
        edits[key].push(word)
      } else {
        edits[key] = [word]
      }
    }
  }

  let q = [[source, 0]];
  let seen = new Set()
  seen.add(source)

  while (q.length) {
    const [word, depth] = q.shift()

    if (word === target) {
      return depth
    }

    for (let i = 0; i < word.length; i++) {
      let key = word.slice(0, i) + '*' + word.slice(i + 1);
      if (key in edits) {
        for (let edit of edits[key]) {
          if (!seen.has(edit)) {
            q.push([edit, depth + 1])
            seen.add(edit)
          }
        }
      }
    }
  }
  return -1
}

export default shortestWordEditPath;

// change 1 letter at at time
// target in words

// source = "bit", target = "dog"
// words = ["but", "bat", "put", "big", "pot", "pog", "dog", "lot"]

// output: 5
// explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.

// *it: [],
// b*t: [but, bat]
// bi*: [big]
