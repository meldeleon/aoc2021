let input = require("fs")
  .readFileSync("day3_input.txt")
  .toString()
  .split("\r\n")
let columns = {}
for (g = 0; g < 12; g++) {
  columns[g] = []
}

for (h = 0; h < input.length; h++) {
  let hArray = input[h].split("")
  for (i = 0; i < hArray.length; i++) {
    columns[i].push(hArray[i])
  }
}
let gamma = []
let epsilon = []
for (j = 0; j < 12; j++) {
  let count0 = 0
  let count1 = 0
  columns[j].forEach((x) => {
    if (x === "0") {
      count0++
    } else {
      count1++
    }
    // console.log(count0, count1)
  })
  if (count1 > count0) {
    gamma.push(1)
    epsilon.push(0)
  } else {
    gamma.push(0)
    epsilon.push(1)
  }
}
console.log(gamma, epsilon)
let o2rounds = {}
for (g = 0; g < 13; g++) {
  o2rounds[g] = []
}
o2rounds[0].push(input)
let co2rounds = {}
for (g = 0; g < 13; g++) {
  co2rounds[g] = []
}
co2rounds[0].push(input)

for (h = 0; h < o2rounds[h].length; h++) {
  for (j = 0; j < o2rounds[h][j]; j++) {
    for (i = 0; i < hArray.length; i++) {
      let hArray = o2rounds[h][j].split("")
      console.log(hArray[i], gamma[i])
      if (parseInt(hArray[i]) === parseInt(gamma[i])) {
        o2rounds[i].push(o2rounds[h + 1])
      }
    }
    console.log(o2Rounds)
  }
}
console.log(o2rounds[11], co2rounds[11])
