// JavaScript Fundamentals Part 1 Exercises

// LECTURE: Values and Variables
// 1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)
// 2. Logtheirvaluestotheconsole

const country = 'United States'
const continent = 'North America'
let population = 329.5

console.log(country, continent, population)

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population' 'country'and'language' to the console

const isIsland = false
let language
console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

// LECTURE: Let, Const and Var

language = 'English'
console.log(typeof language)

// LECTURE: Basic Operators
// 1. If your country split in half,and each half would contain half the population, then how many people would live in each half?
console.log('Population by half: ' + population / 2)

// 2. Increase the population of your country by 1 and log the result to the console

population++
console.log(population)

// 3. Finland has a population of 6 million Does your country have more people than Finland?

let finlandPopulation = 6
console.log(population > finlandPopulation)

// 4. The average population of a country is 33 million people.Does your country have less people than the average country?

let averagePopulation = 33
console.log(country < averagePopulation)

// 5.

let description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language
console.log(description)

// LECTURE: String and Template Literals

let description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description2)

// LECTURE: Taking Decisions (if/else statement)

if (population > 33) {
  console.log(`${country}'s population is above average`)
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  )
}

// LECTURE: EQUALITY OPERATORS: == vs ===

// let numNeighbors = Number(
//   prompt('How many neighbor countries does your country have?')
// )

// if (numNeighbors === 1) {
//   console.log('Only 1 border!')
// } else if (numNeighbors > 1) {
//   console.log('More than 1 border!')
// } else {
//   console.log('No borders')
// }

// LECTURE: LOGICAL OPERATORS

if (language === 'English' && population < 50 && country !== isIsland) {
  console.log(`You should live in ${country}`)
} else {
  console.log(`${country} does not meet your criteria`)
}

// LECTURE: The switch statement
switch (language) {
  case 'Chinese':
  case 'Mandarin':
    console.log('MOST number of native speakers')
    break
  case 'Spanish':
    console.log('2nd place in number of native speakers')
    break
  case 'English':
    console.log('3rd place')
    break
  case 'Arabic':
    console.log('5th most spoken language')
    break
  default:
    console.log('Great language too!')
}

// TERNARY OPERATOR

population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`)