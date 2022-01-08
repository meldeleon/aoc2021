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

  inputArray.forEach((digit) => {
    switch (digit.length) {
      case 5:
        //1
        let oneCount = createCount(1, digitAssignments)
        //4
        let fourCount = createCount(4, digitAssignments)
        // 7
        let sevenCount = createCount(7, digitAssignments)
        let sum = oneCount + fourCount + sevenCount
        console.log(digit, sum)
        if (sum === 6) {
          digitAssignments[2] = digit.split("")
        } else if (sum === 8) {
          digitAssignments[3] = digit.split("")
        }
        break
      case 6:
        let oneCount2 = createCount(1, digitAssignments)
        let twoCount2 = createCount(2, digitAssignments)
        let threeCount2 = createCount(3, digitAssignments)
        let fourCount2 = createCount(4, digitAssignments)
        let sevenCount2 = createCount(7, digitAssignments)
        let sum2 =
          oneCount2 + twoCount2 + threeCount2 + fourCount2 + sevenCount2
        console.log(digit, sum2)
        if (sum2 === 16) {
          digitAssignments[0] = digit.split("")
        } else if (sum === 13) {
          digitAssignments[5] = digit.split("")
        } else if (sum2 === 14) {
          digitAssignments[6] = digit.split("")
        } else if (sum2 === 9) {
          digitAssignments[9] = digit.split("")
        }
        break
      default:
    }
  })
  console.log(digitAssignments)
})

function createCount(comparator, digitAssignments) {
  let count = 0
  digitAssignments[comparator].forEach((letter) => {
    count++
  })
  return count
}

digitAssignments[7].forEach((letter) => {
  sevenCount2++
})
