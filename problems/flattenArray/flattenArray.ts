import { Stack } from '../../stacks/Stack'

/**
 * @function flattenArray 
 * Flattens an array iteratively with the help of a stack
 * This approach requires that that inner arrays be iterated over
 * in reverse order (from back to front)
 */
export const flattenArray = (arr) => {
  const s = new Stack()
  const out = [];

  for (let elem of arr) {
    s.push(elem)
    while (!s.isEmpty()) {
      const elem = s.pop();
      if (Array.isArray(elem)) {
        for (let i = elem.length - 1; i >= 0; i--) {
          let subEl = elem[i]
          s.push(subEl)
        }
      } else {
        out.push(elem)
      }
    }
  }
  return out
}

/**
 *
 * @function fta2 (Flatten array two). Flatten an array iteratively with
 * the help of a stack.
 * 
 * This approach iterates first over all the elements of 
 * the original/top level array. If the current element being iterated
 * over is an array the element array will be pushed to the stack 
 * otherwise push the element directly to the output array. 
 * 
 * While there are elements in the stack check if the element is an array 
 * if so iterate over its members and push each one onto the stack
 * otherwise push the element to the output array.
 * 
 * Interestingly the feature of this approach that iterates over the 
 * elements in the top level first, enables it to build an output array 
 * that ends up in reverse order from the original. 
 */

export const fta2 = (arr) => {
  const s = new Stack()
  const out = [];

  for (let elem of arr) {
    if (Array.isArray(elem)) {
      for (let subEl of elem) {
        s.push(subEl)
      }
    } else {
      s.push(elem)
    }
  }

  while (!s.isEmpty()) {
    const elem = s.pop();
    if (Array.isArray(elem)) {
      for (let subEl of elem) {
        s.push(subEl)
      }
    } else {
      out.push(elem)
    }
  }

  return out.reverse()
}

