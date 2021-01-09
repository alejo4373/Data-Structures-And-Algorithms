import { Queue } from '../../queues/Queue';

class HashSet {
  set: Object;

  constructor() {
    this.set = {};
  }

  add(elem: any): void {
    let serialized = elem.toString()
    this.set[serialized] = elem;
  }

  has(elem: any): Boolean {
    let serialized = elem.toString()
    return Boolean(this.set[serialized])
  }

  size(): number {
    return Object.keys(this.set).length
  }
}

const shortestCellPath = (grid: number[][], sr: number, sc: number, tr: number, tc: number): number => {
  const cols: number = grid[0].length
  const rows: number = grid.length
  let queue: Queue = new Queue()
  queue.enqueue([sr, sc, 0])

  let seen: HashSet = new HashSet()
  seen.add([sr, sc])

  while (!queue.isEmpty()) {
    let [r, c, depth] = queue.dequeue()
    if (r === tr && c === tc) return depth
    let dirs = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]]
    for (let move of dirs) {
      let [cr, cc] = move
      if (cr >= 0 && cr < rows && cc >= 0 && cc < cols) {
        if (grid[cr][cc] && !seen.has(move)) {
          queue.enqueue([cr, cc, depth + 1])
          seen.add(move)
        }
      }
    }
  }
  return -1
}

export default shortestCellPath;
