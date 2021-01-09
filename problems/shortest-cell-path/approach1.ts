function shortestCellPath(grid, sr, sc, tr, tc) {
  let crrLocation = [sr, sc]
  let target = [tr, tc]
  const walkedMoves = {
    [crrLocation.toString()]: crrLocation
  }

  while (!isSame(crrLocation, target)) {
    let moves = findMoves(grid, crrLocation, walkedMoves)
    if (!moves.length) return -1

    let closestLocation = findClosestMove(moves, target)
    crrLocation = closestLocation
    walkedMoves[crrLocation.toString()] = crrLocation
  }

  return Object.keys(walkedMoves).length - 1
}

const isSame = (location, target) => {
  const [lr, lc] = location
  const [tr, tc] = target
  return (lr === tr && lc === tc)
}

const findMoves = (grid, location, walkedMoves) => {
  let [r, c] = location
  const moves = [
    [r - 1, c], // Up
    [r + 1, c], // Down
    [r, c - 1], // Left
    [r, c + 1]  // Right
  ]

  const validMoves = []
  for (let move of moves) {
    const [mr, mc] = move
    if (walkedMoves[move.toString()]) continue;
    const row = grid[mr]
    if (row) {
      if (row[mc]) {
        validMoves.push(move)
      }
    }
  }
  return validMoves;
}

const findClosestMove = (moves, target) => {
  let closestMove;
  let closestDistance = Infinity;

  for (let move of moves) {
    const [mr, mc] = move
    const [tr, tc] = target
    let distance = Math.abs(mr - tr) + Math.abs(mc - tc)
    if (distance < closestDistance) {
      closestDistance = distance
      closestMove = move
    }
  }
  return closestMove
}

export default shortestCellPath;
