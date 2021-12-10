let input = require("fs")
  .readFileSync("day1_input.txt")
  .toString()
  .split("\r\n")
console.log(input)
let decreased = 0
let increased = 0
input = input.map((x) => parseInt(x))

for (let i = 0; i < input.length; i++) {
  if (input[i + 3]) {
    let a = input[i] + input[i + 1] + input[i + 2]
    let b = input[i + 1] + input[i + 2] + input[i + 3]
    if (a > b) {
      console.log(a, b, "decreased")
      decreased++
    } else if (a < b) {
      console.log(a, b, "increased")
      increased++
    } else {
      console.log(a, b, "equal")
    }
  } else {
    //cannot make a sliding avg set
  }
}
console.log(increased)
