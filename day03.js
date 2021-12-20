let input = require("fs")
  .readFileSync("day03_input.txt")
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
export gamma = parseInt(gamma.join(""), 2)
export epsilon = parseInt(epsilon.join(""), 2)
console.log(gamma, epsilon, gamma * epsilon)
