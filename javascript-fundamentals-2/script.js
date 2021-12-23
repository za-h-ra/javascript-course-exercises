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
  let percentage  = (population / 7900) * 100
  return percentage.toFixed(1)
}

console.log(percentageOfWorld1(325))

const percentageOfWorld2 = (population) => {
  return (population / 7900) * 100
}

console.log(percentageOfWorld2(1441))