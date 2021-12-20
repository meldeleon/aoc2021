let input = require("fs")
  .readFileSync("day02_input.txt")
  .toString()
  .split("\r\n")
let horizontal = 0
let vertical = 0

input.forEach((x) => {
  let [command, amount] = x.split(" ")
  amount = parseInt(amount)
  if (command === "forward") {
    horizontal += amount
  } else if (command === "down") {
    vertical += amount
  } else {
    vertical -= amount
  }
})
console.log(horizontal, vertical, horizontal * vertical)
