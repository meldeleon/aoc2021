let input = require("fs")
  .readFileSync("day04_input.txt")
  .toString()
  .split("\r\n")
let bingoAnswers = input[0].split(",")
console.log(bingoAnswers)
let rawCards = grabRawCards(input)
let arrCards = []
rawCards.forEach((x) => {
  arrCards.push(createBingoCard(x))
})
//update numbers in cards array to be objects with called/not called
arrCards.forEach((card) => {
  card.forEach((numberSet) => {
    for (let i = 0; i < numberSet.length; i++) {
      numberSet.splice(i, 1, { num: numberSet[i], called: false })
    }
  })
})

let lastBingoAnswer = 0
let lastBingoCard = []

for (let i = 0; i < bingoAnswers.length; i++) {
  let depletingCards = [...arrCards]
  // iterate over all the cards
  arrCards.forEach((card, cardIndex) => {
    // check the number set in eachcard
    card.forEach((numberSet) => {
      //check each number, if number matches the bingoanswer called, mark as called
      numberSet.forEach((number) => {
        let bingoAnswer = parseInt(bingoAnswers[i])
        let currentNumber = parseInt(number.num)
        if (bingoAnswer === currentNumber) {
          number.called = true
          console.log(`marking ${currentNumber} as called on card ${cardIndex}`)
        }
      })
      //if numberset is all true remove card from testDeck
      if (checkForAllCalled(numberSet)) {
        console.log("removing card " + cardIndex)
        depletingCards.splice(cardIndex, 1, null)
      }
      //when down to the last card
      if (checkForLastCard(depletingCards)) {
        lastBingoCard = checkForLastCard(depletingCards)
        lastBingoAnswer = i
      }
      k
    })
  })
}

console.log(lastBingoAnswer, lastBingoCard)

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

function checkForLastCard(cardArray) {
  let nullCount = 0
  let notNullCard = []
  cardArray.forEach((card) => {
    if (card === null) {
      nullCount++
    } else {
      notNullCard = card
    }
  })
  if (nullCount === cardArray.length - 1) {
    return notNullCard //probably truthy?????
  } else {
    return false
  }
}
