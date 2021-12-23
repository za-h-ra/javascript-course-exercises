function describeCountry(country, population, capitalCity) {
  let string = `${country} has ${population} million people and its capital city is ${capitalCity}`
  return string
}

console.log(describeCountry('Costa Rica', 5.094, 'San Jose'))
console.log(describeCountry('Argentina', 45.38, 'Buenos Aires'))
console.log(describeCountry('Austrailia', 25.69, 'Canberra'))
