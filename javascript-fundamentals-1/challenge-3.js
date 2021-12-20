// TEST DATA:
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let dolphinsAvg = (96 + 108 + 89) / 3
let koalasAvg = (88 + 91 + 110) / 3
console.log(dolphinsAvg, koalasAvg)

if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins win!")
} else if (dolphinsAvg < koalasAvg) {
  console.log("Koalas win!")
} else if (dolphinsAvg === koalasAvg) {
  console.log("It's a tie!")
} else {
  console.log("No one wins!")
}

// BONUS 1 && BONUS 2

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("Dolphins Win!")
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log("Koalas Win!")
} else if (dolphinsAvg === koalasAvg && koalasAvg >= 100 && dolphinsAvg >= 100) {
  console.log("It's a tie!")
} else {
  console.log("No one wins!")
}