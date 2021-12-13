let input = require("fs")
  .readFileSync("day4_input.txt")
  .toString()
  .split("\r\n")
let bingoAnswers = input[0]
let rawCards = grabRawCards(input)
let arrCards = []
rawCards.forEach((x) => {
  arrCards.push(createBingoCard(x))
})

arrCards.forEach((card) => {
  card.forEach((numberSet) => {
    for (let i = 0; i < numberSet.length; i++) {
      numberSet.splice(i, 1, { num: numberSet[i], called: false })
    }
  })
})

for (let i = 0; i < bingoAnswers.length; i++) {
  arrCards.forEach((card) => {
    card.forEach((numberSet) => {
      numberSet.forEach((number) => {
        if (parseInt(number.num) === parseInt(bingoAnswers[i])) {
          number.called = true
        }
      })
      //if numberset is all true break, and return
    })
  })
}
console.log(arrCards[0])

function checkForAllCalled(numberSet) {
  numberSet.forEach((number) => {
    numbe
  })
}

function grabRawCards(data) {
  let cardData = []
  let cardArray = []
  for (h = 2; h < input.length; h += 6) {
    cardArray = [data[h], data[h + 1], data[h + 2], data[h + 3], data[h + 4]]
    cardData.push(cardArray)
  }
  return cardData
}

function createBingoCard(data) {
  let rows = data.map((x) => {
    return x.trim().split(/ +/g)
  })
  let columns = []
  let currentColumn = []
  for (let i = 0; i < 5; i++) {
    currentColumn = []
    for (let j = 0; j < 5; j++) {
      currentColumn.push(rows[j][i])
    }
    columns.push(currentColumn)
  }
  let card = columns.concat(rows)
  return card
}
