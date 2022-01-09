const { createSecretKey } = require("crypto")
const { abort } = require("process")
const { unzipSync } = require("zlib")

let data = require("fs")
  .readFileSync("day08_input.txt")
  .toString()
  .split(/\r\n/)

let solutionsArray = []
data.forEach((row) => {
  let [input, output] = row.split(/\s\|\s/)
  //console.log({ input, output }) // ure_funny has blown my mind.
  let inputArray = input.split(/\s/)
  //console.log({ inputArray })
  let digitAssignments = {}
  let segmentAssignments = {}
  //assign the stuff we do know
  inputArray.forEach((digit, index) => {
    switch (digit.length) {
      case 2:
        digitAssignments[1] = digit.split("")
        break
      case 3:
        digitAssignments[7] = digit.split("")
        break
      case 4:
        digitAssignments[4] = digit.split("")
        break
      case 7:
        digitAssignments[8] = digit.split("")
        break
      default:
      //console.log(`could not assign ${digit} to a value`)
    }
  })
  console.log(digitAssignments)
  inputArray.forEach((digit) => {
    switch (digit.length) {
      case 6:
        let oneCountA = createCount(1, digitAssignments, digit)
        let fourCountA = createCount(4, digitAssignments, digit)
        let sevenCountA = createCount(7, digitAssignments, digit)
        let sumA = oneCountA + fourCountA + sevenCountA
        if (sumA === 8) {
          digitAssignments[0] = digit.split("")
        } else if (sumA === 6) {
          digitAssignments[6] = digit.split("")
        } else if (sumA === 9) {
          digitAssignments[9] = digit.split("")
        }
        break
    }
  })
  console.log(digitAssignments)
})

function createCount(comparator, digitAssignments, digit) {
  let count = 0
  digitAssignments[comparator].forEach((letter) => {
    if (digit.includes(letter)) {
      count++
    }
  })
  return count
}
