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

if (!neighbors.includes('Germany')) console.log('Probably not a central american country')

neighbors[neighbors.indexOf('Panama')] = 'Colombia'
console.log(neighbors)

// Intro to Objects

const zahra = {
  firstName: 'zahra',
  lastName: 'khan',
  age: 28,
  job: 'software engineer',
  friends: ['Katie', 'Sonia']
}

const myCountry = {
  country: 'Argentina',
  capital: 'Buenos Aires',
  language: 'Spanish',
  population: 45.38,
  neighbors: ['Chile', 'Venezuela', 'Uruguay']
}

console.log(myCountry.capital)
console.log(myCountry['population'])

console.log(`${zahra.firstName} has ${zahra.friends.length} friends, and her best friend is called ${zahra.friends[0]}.`)

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2
myCountry['population'] -= 2