let input = require("fs")
  .readFileSync("day4_input.txt")
  .toString()
  .split("\r\n")
let bingoAnswers = input[0].split(",")
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
  let breakpoint = false
  // iterate over all the cards
  console.log(bingoAnswers[i])
  arrCards.forEach((card) => {
    // check the number set in eachcard
    card.forEach((numberSet) => {
      //check each number, if number matches the
      numberSet.forEach((number) => {
        if (parseInt(number.num) === parseInt(bingoAnswers[i])) {
          number.called = true
        }
        console.log
      })
      //if numberset is all true break, and return
      if (checkForAllCalled(numberSet) === true) {
        let sum = sumUnchecked(card) + 8
        let answer = sum * parseInt(bingoAnswers[i])
        console.log(
          "winning card is " +
            arrCards.indexOf(card) +
            " and the answer is: " +
            answer
        )
        console.log(arrCards[arrCards.indexOf(card)])
        breakpoint = true
      }
    })
  })
  if (breakpoint === true) {
    console.log("breaking at number: " + bingoAnswers[i])
    break
  }
}

function sumUnchecked(card) {
  let unchecked = []
  card.forEach((numberSet) => {
    numberSet.forEach((number) => {
      if (
        !unchecked.includes(parseInt(number.num)) &&
        number.called === false
      ) {
        unchecked.push(parseInt(number.num))
      }
    })
  })
  let sum = 0
  for (let i = 0; i < unchecked.length; i++) {
    sum += unchecked[i]
  }
  return sum
}

function checkForAllCalled(numberSet) {
  let count = 0
  numberSet.forEach((number) => {
    if (number.called === true) {
      count++
    }
  })
  if (count >= 5) {
    return true
  } else {
    return false
  }
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
