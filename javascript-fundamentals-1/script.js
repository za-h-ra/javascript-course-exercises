// VALUES AND VARIABLES
// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.

const country = "United States";
const continent = "North America";
let population = 341466854;

console.log(country);
console.log(continent);
console.log(population);

// DATA TYPES
// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// Log the types of isIsland, population, country and language to the console.

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);

language = "English";

// BASIC OPERATORS
// 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?

// 2. Increase the population of your country by 1 and log the result to the console.

// 3. Finland has a population of 6 million. Does your country have more people than Finland?

// 4. The average population of a country is 33 million people. Does you country have less people than the average country?

// 5. Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

let populationHalf = population / 2;
console.log(populationHalf);

console.log(population++);

let finlandPop = 6000000;

let isPopMore = population > finlandPop;
console.log(isPopMore);

let avgPopulation = 33000000;
console.log(population < avgPopulation);

let description =
  "The " +
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language +
  ".";
console.log(description);

// STRINGS AND TEMPLATE LITERALS
// Recreate the description variable from the last assignment, this time using the template literal syntax.

let description2 = `The ${country} is in ${continent}, and its ${population} people speak ${language}.`;
console.log(description);

// IF/ELSE STATEMENTS
// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

if (population > avgPopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      population - avgPopulation
    } million below average.`
  );
}
