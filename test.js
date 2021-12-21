let allCards =

function checkIfEverythingIsCalledButOne(allCards) {
    let falseCount = 0
    allCards.forEach((card) => {
      card.forEach((numberSet) => {
        if (!checkForAllCalled(numberSet)) {
          falseCount++
        }
      })
    })
    console.log(falseCount)
    if (falseCount === 1) return true
  }