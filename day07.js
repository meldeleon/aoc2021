let input = require("fs").readFileSync("day07_input.txt").toString().split(",")

console.log(input)
let answers = []
const sum = (a, b) => a + b
const larger = (a, b) => {
  if (a >= b) {
    return a
  } else {
    return b
  }
}
input.forEach((x) => {
  let differences = input.map((y) => {
    return Math.abs(y - x)
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
console.log(answers[0])
