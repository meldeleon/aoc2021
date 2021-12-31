let input = require("fs")
  .readFileSync("day04_input.txt")
  .toString()
  .split("\r\n")
let bingoAnswers = input[0].split(",")
console.log(bingoAnswers)
let arrCards = grabRawCards(input).map((x) => {
  return createBingoCard(x)
})

arrCards.forEach((card, index) => {
  arrCards.splice(index, 1, {
    numberSets: card.map((numberSet) => {
      return {
        answers: numberSet.map((number) => {
          return { num: number, called: false }
        }),
        called: false,
      }
    }),
    called: false,
  })
})
let stop = false
bingoAnswers.forEach((number, index) => {
  let breakpoint = false
  let bingoAnswer = parseInt(bingoAnswers[index])
  arrCards.forEach((card) => {
    if (!breakpoint) {
      if (card.called === false) {
        card.numberSets.forEach((numberSet) => {
          numberSet.answers.forEach((number) => {
            let currentNumber = parseInt(number.num)
            if (bingoAnswer === currentNumber) {
              number.called = true
            }
          })
          markNumberSet(card.numberSets)
        })
        markCard(card)
      }

      //capture last card
      let lastCardIndex = storeLastCardIndex(arrCards)
      //if the number of false cards drops to 0

      if (areAllCardsCalled(arrCards) && lastCardIndex && !stop) {
        //mark anything on the last card, return answer
        card.numberSets.every((numberSet) => {
          numberSet.answers.every((number) => {
            if (parseInt(number.num) === bingoAnswer) {
              number.called = true
            }
          })
        })
        let losingCard = arrCards[lastCardIndex]
        let sumOfUnchecked = sumUnchecked(losingCard)
        let answer = sumOfUnchecked * bingoAnswer
        console.log("the answer is " + answer)
        console.log(losingCard)
        console.log(bingoAnswer)
        stop = true
      }
    }
  })
})
// console.log(arrCards[0].numberSets[0])
// console.log(arrCards)
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

function markNumberSet(numberSets) {
  numberSets.forEach((numberSet) => {
    let count = 0
    numberSet.answers.forEach((number) => {
      if (number.called === true) {
        count++
      } else {
      }
    })
    if (count === 5) {
      numberSet.called = true
    }
  })
}

function markCard(card) {
  card.numberSets.forEach((answerSet) => {
    if (answerSet.called) {
      card.called = true
    }
  })
}

function sumUnchecked(card) {
  let unchecked = []
  card.numberSets.forEach((numberSet) => {
    numberSet.answers.forEach((number) => {
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

function storeLastCardIndex(cards) {
  let calledCardsCount = 0
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].called === true) {
      calledCardsCount++
    }
    let difference = cards.length - calledCardsCount
    if (difference === 1) {
      return i
    }
  }
}
function areAllCardsCalled(cards) {
  let totalCards = parseInt(cards.length)
  let calledCards = 0
  cards.forEach((card) => {
    if (card.called) {
      calledCards++
    }
  })
  if (totalCards === calledCards) {
    return true
  } else {
    return false
  }
}
