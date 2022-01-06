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

  inputArray.forEach( digit => {
     digitAssignments[1].includes

      switch (digit.length){
          case 6:
              //0
              if ()
      }
  })

})
/* NOTES
0 = abcefg // 6 digits, matches all digits for 1,missing one digit for 4 (d), matches all digits 7, and one digit for 8 (d)
6 = abdefg // 6 digits, missing 1 digit for 1 (f), missing 1 digit from 4 (c), missing 1 digit from 7 (c), and 1 digit from 8 (c)
9 = abcdfg // 6 digits, matches all digits for 1, matches all digits for 4, matches all digits for 7, missing 1 digit from 8 (e) 

we can assign d,  assign c,  assign e


2 = acdeg // 5 digits, matches one digit for 1/2 (c), matches 3/4 digits for four(cdg), matches all digits for 7, matches 5 digits for 8
3 = acdfg // 5 digits
5 = abdfg // 5 digits


**1 = cf // 2 digits 
**4 = bcdf // 4 digits
**7 = acf // 3 digits
**8 = abcdefg // 7 digits




c is included in 1,4,7,8
f is inlcluded in 1,4,5,7,8



*/
