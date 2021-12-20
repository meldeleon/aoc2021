let input = require("fs")
  .readFileSync("day03_input.txt")
  .toString()
  .split("\r\n")

let o2 = input
let co2 = input
for (f = 0; f <= input[0].length; f++) {
  if (o2.length === 1) {
    console.log("o2 rating = " + parseInt(o2, 2))
    break
  }
  let filteredData = filterbyDigit(o2, f)
  o2 = filteredData.majoritySet
}

for (h = 0; h <= input[0].length; h++) {
  if (co2.length === 1) {
    console.log("co2 rating = " + parseInt(co2, 2))
    break
  } else {
    let filteredData = filterbyDigit(co2, h)
    co2 = filteredData.minoritySet
  }
}

console.log(parseInt(co2, 2) * parseInt(o2, 2))

function filterbyDigit(dataSet, digit) {
  // dataSet is array of numbers
  // type is major or minor
  // returns object with majoritySet/minoritySet
  let digitSet = []
  for (i = 0; i < dataSet.length; i++) {
    digitSet.push(parseInt(dataSet[i][digit]))
  }
  let majority = returnMajority(digitSet)
  //console.log("majority is: " + majority)
  let minoritySet = []
  let majoritySet = []
  dataSet.forEach((x) => {
    //console.log(x[digit])
    if (parseInt(x[digit]) === majority) {
      majoritySet.push(x)
      //console.log(x[digit])
    } else {
      minoritySet.push(x)
    }
  })
  return { majoritySet, minoritySet }
}

function returnMajority(arr) {
  let count0 = 0
  let count1 = 0
  arr.forEach((x) => {
    if (x === 0) {
      count0++
    } else {
      count1++
    }
  })
  if (count0 > count1) {
    return 0
  } else {
    return 1
  }
}
