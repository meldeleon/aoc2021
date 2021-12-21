let input = require("fs")
  .readFileSync("day05_input.txt")
  .toString()
  .split("\r\n")

let pointsArray = []
input.forEach((lineCoord) => {
  let drawnCoords = drawLine(lineCoord)
  drawnCoords.forEach((coord) => {
    pointsArray.push(coord)
  })
})

let stringPointsArray = pointsArray.map((x) => {
  return x.toString()
})
console.log(stringPointsArray)

let solutionArray = printDuplicates(stringPointsArray)
console.log(solutionArray)
console.log("the solution is: " + solutionArray.length)

function printDuplicates(coordinateArray) {
  let counts = {}
  let duplicates = []
  for (let i = 0; i < coordinateArray.length; i++) {
    if (counts[coordinateArray[i]]) {
      counts[coordinateArray[i]]++
    } else {
      counts[coordinateArray[i]] = 1
    }
  }
  for (let prop in counts) {
    if (counts[prop] >= 2) {
      duplicates.push(prop)
    }
  }
  return duplicates
}

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
  let slope = returnSlope(x1, x2, y1, y2)
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
  } else if (Math.abs(slope) === 1) {
    //console.log(`${x1},${y1} to ${x2},${y2} is a diagonal`)
    //upper left
    if (x1 > x2 && y1 > y2) {
      diff = x1 - x2
      for (let i = 0; i <= diff; i++) {
        linePoints.push([x1 - i, y1 - i])
      }
    }
    //upper right
    if (x1 < x2 && y1 > y2) {
      diff = x2 - x1
      for (let i = 0; i <= diff; i++) {
        linePoints.push([x1 + i, y1 - i])
      }
    }
    //lower left
    if (x1 > x2 && y1 < y2) {
      diff = x1 - x2
      for (let i = 0; i <= diff; i++) {
        linePoints.push([x1 - i, y1 + i])
      }
    }
    //lower right
    if (x1 < x2 && y1 < y2) {
      diff = x2 - x1
      for (let i = 0; i <= diff; i++) {
        linePoints.push([x1 + i, y1 + i])
      }
    }
  }
  return linePoints
}

function returnSlope(x1, x2, y1, y2) {
  return (y2 - y1) / (x2 - x1)
}
