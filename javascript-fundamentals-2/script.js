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