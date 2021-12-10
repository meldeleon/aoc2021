let input = require("fs")
  .readFileSync("day2_input.txt")
  .toString()
  .split("\r\n")
let horizontal = 0
let vertical = 0
let aim = 0

input.forEach((x) => {
  let [command, amount] = x.split(" ")
  amount = parseInt(amount)
  if (command === "up") {
    aim -= amount
  } else if (command === "down") {
    aim += amount
  } else {
    horizontal += amount
    vertical += amount * aim
  }
})
console.log(horizontal, vertical, horizontal * vertical)
