'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollDice()` by using `.map()` on the `dice` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dice continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const rolledDice = dice.map((die) => rollDie(die));
  return Promise.race(rolledDice);
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    const result = await rollDice();
    console.log('Resolved!', result);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

// Why some dice continue rolling even after the Promise.race() resolves? My explanation.
//
//The individual promises (for every single die) have to finish executing their inner logic in order to decide whether it was a success (resolve) or a failure (reject). So they keep executing - no matter what - all the way until they encounter either resolve() or reject() invocation. Only then they stop executing.
//
// But the Promise.race() resolves immediately when the first (it can be anyone of them) promise in the array resolves. It doesn't wait for the other promises to resolve or reject. And it doesn't stop their execution either - it just doesn't care about them anymore. So they keep living their lives until they finish execution in their own natural way.
