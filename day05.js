let input = require("fs")
  .readFileSync("day5_input.txt")
  .toString()
  .split("\r\n")

let solutionGrid = new Array(9).fill().map(() => new Array(9).fill(0))
// example drawn coord: [ [ 1, 1 ], [ 1, 2 ], [ 1, 3 ] ]

let pointsArray = []
input.forEach((lineCoord) => {
  let drawnCoords = drawLine(lineCoord)
  drawnCoords.forEach((coord) => {
    pointsArray.push(coord)
    // let currentVal = parseInt(solutionGrid[adjustIndex(y)][adjustIndex(x)])
    // solutionGrid[adjustIndex(y)][adjustIndex(x)] = currentVal + 1
  })
})
let solutionArray = []

let stringPointsArray = pointsArray.map((x) => {
  return x.toString()
})
stringPointsArray.forEach((coord, index) => {
  if (stringPointsArray.includes(coord, index + 1)) {
    solutionArray.push(coord)
  }
})
console.log(solutionArray)
console.log("the solution is: " + solutionArray.length)

function adjustIndex(int) {
  if (int > 0) {
    return int - 1
  } else {
    return 0
  }
}

function drawLine(coordinatePair) {
  let diff = 0
  let linePoints = []
  let [x1, y1] = coordinatePair.split(" -> ")[0].split(",")
  let [x2, y2] = coordinatePair.split(" -> ")[1].split(",")
  x1 = parseInt(x1)
  x2 = parseInt(x2)
  y1 = parseInt(y1)
  y2 = parseInt(y2)

  if (x1 === x2) {
    // check which y value is larger to make line points
    if (y2 > y1) {
      diff = y2 - y1
      for (let i = 0; i <= diff; i++) {
        linePoints.push([x1, y1 + i])
      }
    } else if (y1 > y2) {
      diff = y1 - y2
      for (let i = 0; i <= diff; i++) {
        linePoints.push([x1, y2 + i])
      }
    }
  } else if (y1 === y2) {
    // check which y value is larger to make line points
    if (x2 > x1) {
      diff = x2 - x1
      for (let i = 0; i <= diff; i++) {
        linePoints.push([x1 + i, y1])
      }
    } else if (x1 > x2) {
      diff = x1 - x2
      for (let i = 0; i <= diff; i++) {
        linePoints.push([x2 + i, y2])
      }
    }
  }
  return linePoints
}
