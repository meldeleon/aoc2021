let a = ["c", "f"]

let b = ["a", "b", "d", "f", "g"]

count = 0
a.forEach((letter) => {
  if (b.includes(letter)) {
    count++
  }
})
console.log(count)
