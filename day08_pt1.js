let input = require("fs")
  .readFileSync("day08_input.txt")
  .toString()
  .split(/\s\|\s|\r\n/)

let output = input.filter((x, index) => index % 2 !== 0)

let outputValues = []

output.forEach((x) => {
  let values = x.split(/\s/)
  values.forEach((y) => {
    outputValues.push(y)
  })
})

let possibleLengths = [2, 3, 4, 7]
let solutionValues = []
outputValues.forEach((x) => {
  if (possibleLengths.includes(x.length)) {
    solutionValues.push(x)
  } else {
    //do nothing
  }
})

console.log(solutionValues)
console.log("the solution is: " + solutionValues.length)
/* NOTES
0 = abcefg
1 = cf // 2 digits
2 = acdeg 
3 = acdfg
4 = bcdg // 4 digits
5 = abdfg
6 = abdefg
7 = acf // 3 digits
8 = abcdefg // 7 digits
9 = abcdfg
*/
