const removeAdjacentDups = (s) => {
  let out = ''
  for (let i = 0; i < s.length - 2; i++) {
    console.log('out:', out)
    if (s[i] === s[i + 1]) {
      out += s.slice(i + 2)
      return out
    } else {
      out += s[i]
    }
  }
  return out
}

console.log(removeAdjacentDups("abbaca"))
