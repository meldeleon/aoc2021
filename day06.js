let input = require("fs").readFileSync("day06_input.txt").toString().split(",")

let fishies = input.map((x) => {
  return parseInt(x)
})

console.log(fishies)
for (let day = 1; day <= 18; day++) {
  for (let i = 0, len = fishies.length; i < len; i++) {
    if (fishies[i] > 0) {
      let newValue = fishies[i] - 1
      fishies.splice(i, 1, newValue)
    } else {
      fishies.push(8)
      fishies.splice(i, 1, 6)
    }
  }
  fishies.sort()
  console.log(`after ${day} day: ${fishies} `)
}

console.log(fishies.length)
