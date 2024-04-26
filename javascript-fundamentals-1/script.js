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

language = "Mandarin";

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

// let numNeighbours = Number(
//   prompt("How many neighbor countries does your country have?")
// );
// console.log(numNeighbours);

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No borders!");
// }

// LOGICAL OPERATORS
// Comment out the previous code so the prompt doesn't get in the way.

// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

// If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

// Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).

if (language === "English" && population < 50000000 && !isIsland) {
  console.log(`You should live in the ${country}`);
} else {
  console.log(`${country} does not meet the criteria ):`);
}

// THE SWITCH STATEMENT
// Use a switch statement to log the following string for the given language:

// chinese or mandarin: 'MOST number of native speakers!';

// spanish: '2nd place in number of native speakers';

// english: '3rd place';

// hindi: 'Number 4';

// arabic: '5th most spoken language';

// for all other simply log 'Great language too :D'.

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
  default:
    console.log("Great language too :D");
}

// THE CONDITIONAL (TERNARY) OPERATOR
// If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

console.log(
  `${country}'s population is ${
    population > 33000000 ? "above" : "below"
  } average`
);
