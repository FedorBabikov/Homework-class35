'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

// set-up section: set vars for time interval and for the target DOM elem
let intervalID;
const pElem = document.querySelector('#time');

// add event listeners on buttons
document.querySelector('.start').addEventListener('click', addCurrentTime);
document.querySelector('.stop').addEventListener('click', stopTimer);

function addCurrentTime() {
  // set timer only if it's not already running
  if (!intervalID) {
    intervalID = setInterval(
      () => (pElem.textContent = getCurrentTime()),
      1000
    );
  }
}

// take the NOW time -> get Hs, Ms, Ss from the object -> make sure they are always 2-digit -> return the HH:MM:SS notation
function getCurrentTime() {
  const date = new Date();
  const hhmmss = [date.getHours(), date.getMinutes(), date.getSeconds()];
  const hhmmssModified = [];
  for (const hms of hhmmss) {
    hhmmssModified.push((hms < 10 ? '0' : '') + hms);
  }
  return `${hhmmssModified[0]} : ${hhmmssModified[1]} : ${hhmmssModified[2]}`;
}

// on pressing the stop button - let go of the time interval and erase the target elem's content
function stopTimer() {
  clearInterval(intervalID);
  intervalID = null;
  pElem.textContent = '';
}

window.addEventListener('load', addCurrentTime);
