let input = require("fs")
  .readFileSync("day01_input.txt")
  .toString()
  .split("\r\n")
console.log(input)
let results = []
let decreased = 0
let increased = 0
input = input.map((x) => parseInt(x))

for (let i = 1; i < input.length; i++) {
  if (input[i] < input[i - 1]) {
    console.log(input[i - 1], input[i], "Decreased")
    results.push("Decreased")
    decreased++
  } else if (input[i] > input[i - 1]) {
    console.log(input[i - 1], input[i], "Increased")
    results.push("Increased")
    increased++
  } else {
    console.log(input[i - 1], input[i], "Equal")

    //equal
  }
}
console.log(increased)
