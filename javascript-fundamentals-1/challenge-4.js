// TEST DATA: 
// Test for bill values 275, 40, 430

let bill = 275
let tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`)

