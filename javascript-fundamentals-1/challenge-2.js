// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use atemplate literal to include the BMI values in the outputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"

let markMass = 78
const markHeight = 1.69
let johnMass = 92
const johnHeight = 1.95

const markBMI = markMass / markHeight ** 2
console.log(markBMI)

const johnBMI = johnMass / johnHeight ** 2
console.log(johnBMI)

let markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}
