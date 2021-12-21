let input = require("fs").readFileSync("day06_input.txt").toString().split(",")

let fishies = input.map((x) => {
  return parseInt(x)
})

let fishTemplate = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
}

let fishCount = { ...fishTemplate }
fishies.forEach((fish) => {
  fishCount[fish] += 1
})

for (let day = 1; day <= 256; day++) {
  let nextFishCount = { ...fishTemplate }
  nextFishCount[0] = fishCount[1]
  nextFishCount[8] = fishCount[0]
  nextFishCount[7] = fishCount[8]
  nextFishCount[6] = fishCount[7] + fishCount[0]
  nextFishCount[5] = fishCount[6]
  nextFishCount[4] = fishCount[5]
  nextFishCount[3] = fishCount[4]
  nextFishCount[2] = fishCount[3]
  nextFishCount[1] = fishCount[2]
  fishCount = nextFishCount
}

let answer = 0
for (let key in fishCount) {
  answer += fishCount[key]
}
console.log(answer)
