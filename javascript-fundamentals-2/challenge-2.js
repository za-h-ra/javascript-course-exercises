// TEST DATA: 125, 555, 44

// let bill = 125
// let tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20
}

console.log(calcTip(100))

const bills = [125, 55, 44]

console.log(calcTip(bills[0]))
console.log(calcTip(bills[1]))
console.log(calcTip(bills[2]))

const tips = [18.75, 8.25, 8.8]

let totals = []
let total = bills.map(function (el1, idx) {
  return totals.push(el1 + tips[idx])
})

console.log(totals)

