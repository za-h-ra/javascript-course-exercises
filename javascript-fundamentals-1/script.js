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

// TYPE CONVERSION AND COERCION

console.log("9" - "5"); // 3 because it automatically thinks its a number and subtracts it
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// EQUALITY OPERATORS: == vs ===
// Declare a variable numNeighbours based on a prompt input like this:

// prompt('How many neighbour countries does your contry have?');
// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

// Test the code with different values of numNeighbours, including 1 and 0.

// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

// Reflect on why we should use the === operator and type conversion in this situation.

let numNeighbours = Number(
  prompt("How many neighbor countries does your country have?")
);
console.log(numNeighbours);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}
