//day 4 refactor
//data
let input = require("fs")
  .readFileSync("day04_input.txt")
  .toString()
  .split("\r\n")

let bingoAnswers = input[0].split(",")
let cardsArray = []
for (let i = 2; i <= input.length; i + 6) {
  let card = []
  for (let j = 0; j < 6; j++) {
    let cardNumberSet = []
    let numberSet = input[parseInt(i + j)].split(" ")
    console.log(numberSet)
    numberSet.forEach((number) => {
      let numObj = { num: number, called: false }
      cardNumberSet.push(numObj)
    })
    card.push(cardNumberSet)
  }
}
console.log(cardsArray)
