'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-3-be-your-own-fortune-teller

Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments (in the order listed): 
     * the array with the options for the number of children, 
     * the array with the options for the partner's name, 
     * the array with the options for the geographic location and 
     * the array with the options for the job title.
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY principle is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/

// This function should take an array as its parameter and return
// a randomly selected element as its return value.
function selectRandomly(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 'selectRandomly: passed argument is either not an array or empty.';
  }
  const randomElem = Math.floor(Math.random() * arr.length);
  return arr[randomElem];
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  // take four arguments (assignment requirement) -> collect them into an array ->
  // map-iterate through that array - calling the selection function on each element ->
  // collect the results (primitives) in a new array -> give them meaningful names, insert them into a string ->
  // -return the string
  const values = [numKids, partnerNames, locations, jobTitles];

  const randomValues = values.map((array) => selectRandomly(array));

  const [numKid, partnerName, location, jobTitle] = randomValues;

  return `You will be a ${jobTitle} in ${location}, married to ${partnerName} with ${numKid} kids.`;
}

function main() {
  const numKids = [2, 15, 6, 5, 10];

  const partnerNames = ['John', 'Ruth', 'Boris', 'Samantha', 'Brad'];

  const locations = ['London', 'Paris', 'Amsterdam', 'Utrecht', 'Warsaw'];

  const jobTitles = [
    'manager',
    'driver',
    'fortune teller',
    'minister',
    'sailor',
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
