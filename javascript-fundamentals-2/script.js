// LECTURE: FUNCTIONS

function describeCountry(country, population, capitalCity) {
  let string = `${country} has ${population} million people and its capital city is ${capitalCity}`
  return string
}

console.log(describeCountry('Costa Rica', 5.094, 'San Jose'))
console.log(describeCountry('Argentina', 45.38, 'Buenos Aires'))
console.log(describeCountry('Austrailia', 25.69, 'Canberra'))

// LECTURE: Function Declarations vs Expressions

function percentageOfWorld1(population) {
  let percentage = (population / 7900) * 100
  return percentage.toFixed(1)
}

console.log(percentageOfWorld1(325))

const percentageOfWorld2 = (population) => {
  return (population / 7900) * 100
}

console.log(percentageOfWorld2(1441))

// LECTURE: Arrow Functions

const percentageOfWorld3 = (population) => (population / 7900) * 100
console.log(percentageOfWorld3(5000))

//LECTURE: Functions Calling Other Functions

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population)
  return `${country} has ${population} million people, which is about ${percentage}% of the world`
}

console.log(describePopulation('United States', 1441))

// LECTURE: Introduction to Arrays

const populations = [329.5, 45.38, 128.9, 67.22]
console.log(populations.length === 4)
const percentages = [4.2, 0.6, 1.6, 0.9]
console.log(percentageOfWorld1(populations[3]))

// Basic Array Operations

const neighbors = ['Costa Rica', 'Panama', 'Nicaragua']
neighbors.push('Utopia')
console.log(neighbors)
neighbors.pop()
console.log(neighbors)

if (!neighbors.includes('Germany'))
  console.log('Probably not a central american country')

neighbors[neighbors.indexOf('Panama')] = 'Colombia'
console.log(neighbors)

// Intro to Objects

const zahra = {
  firstName: 'zahra',
  lastName: 'khan',
  birthYear: 1993,
  job: 'software engineer',
  friends: ['Katie', 'Sonia'],
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age
  },

  driversLicense: function () {
    if (this.hasDriversLicense === true) {
      return `has a driver's license`
    } else {
      return `does not have a driver's license`
    }
  },
}
console.log(zahra.calcAge())
console.log(zahra.age)

console.log(
  `${zahra.firstName} is a ${zahra.age} year old ${
    zahra.job
  }, and she ${zahra.driversLicense()}`
)

const myCountry = {
  country: 'Argentina',
  capital: 'Buenos Aires',
  language: 'Spanish',
  population: 45.38,
  neighbors: ['Chile', 'Venezuela', 'Uruguay'],
}

console.log(myCountry.capital)
console.log(myCountry['population'])

console.log(
  `${zahra.firstName} has ${zahra.friends.length} friends, and her best friend is called ${zahra.friends[0]}.`
)

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
)

myCountry.population += 2
myCountry['population'] -= 2

// LOOPS

// for loop keeps running while condition is true
// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting!`)
// }

// Loop Arrays, Breaking and Continuing

const zahraArray = [
  'Zahra',
  'Khan',
  28,
  'Software Engineer',
  ['Katie', 'Sonia', 'Dylan'],  
  true
]

const types = []

for (let i = 0; i < zahraArray.length; i++) {
  console.log(zahraArray[i], typeof zahraArray[i])
  types[i] = typeof zahraArray[i]
}

console.log(types)

const years = [1991, 1993, 1995, 1997, 1999]

const ages = []

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages) 

// continue and break

const percentages2 = []

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]))
}

console.log(percentages, percentages2)

// Looping backwards

for (let i = zahraArray.length - 1; i >= 0; i--) {
  console.log(i, zahraArray[i])
}

// Looping within loops

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----STARTING EXERCISE ${exercise}`)
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weights rep ${rep}`)
  }
}

// LOOP WITHIN LOOP EXCERCISE

const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]

for (let i = 0; i < listOfNeighbors.length; i++) {
  for (let j = 0; j < listOfNeighbors[i].length; j++) {
    console.log(`Neighbors: ${listOfNeighbors[i][j]} `)
  }
}