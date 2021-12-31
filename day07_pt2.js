let input = require("fs").readFileSync("day07_input.txt").toString().split(",")

let answers = []
const sum = (a, b) => a + b
const larger = (a, b) => {
  if (a >= b) {
    return a
  } else {
    return b
  }
}
let checkNumbers = []
for (let i = Math.min(...input); i <= Math.max(...input); i++) {
  checkNumbers.push(i)
}
console.log(checkNumbers)
checkNumbers.forEach((x) => {
  let differences = input.map((y) => {
    let diff = Math.abs(y - x)
    let numerator = Math.pow(diff, 2) + diff
    let fuel = numerator / 2
    return fuel
  })
  let sumOfDifferences = differences.reduce(sum)
  if (answers[x]) {
  } else {
    answers.push({ val: x, total: sumOfDifferences })
  }
})
answers.sort(function (a, b) {
  return a.total - b.total
})
console.log(answers)
console.log(answers[0])
