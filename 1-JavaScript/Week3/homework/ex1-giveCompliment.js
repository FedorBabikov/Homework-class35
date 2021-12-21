'use strict';
/* -----------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-1-you-are-amazing

1. Complete the function named `giveCompliment`as follows:

   - It should take a single parameter: `name`.
   - Its function body should include a variable that holds an array,
     `compliments`, initialized with 10 strings. Each string should be a
     compliment, like `"great"`, `"awesome"` and so on.
   - It should randomly select a compliment from the array.
   - It should return the string "You are `compliment`, `name`!", where
     `compliment` is a randomly selected compliment and `name` is the name that
     was passed as an argument to the function.

2. Call the function three times, giving each function call the same argument:
   your name.
   Use `console.log` each time to display the return value of the
   `giveCompliment` function to the console.
-----------------------------------------------------------------------------*/
function giveCompliment(name) {
  // take one string from the outside -> randomly select another string from the inner array ->
  // put those strings in two local variables -> use backtick template to form the result string featuring those variables ->
  // -return the result string

  const compliments = [
    'great',
    'awesome',
    'fantastic',
    'gorgeous',
    'wonderful',
    'cool',
    'perfect',
    'amazing',
    'the best',
    'super',
  ];
  
  const aComplimentIndex = Math.floor(Math.random() * compliments.length);
  const aCompliment = compliments[aComplimentIndex];

  return `You are ${aCompliment}, ${name}!`;
}

function main() {
  const myName = 'Fedor';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;