'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
let intervalID;
const pElem = document.querySelector('#time');
document.querySelector('.start').addEventListener('click', addCurrentTime);
document.querySelector('.stop').addEventListener('click', stopTimer);

function addCurrentTime() {
  if (!intervalID) {
    intervalID = setInterval(
      () => (pElem.textContent = getCurrentTime()),
      1000
    );
  }
}

function getCurrentTime() {
  const date = new Date();
  const hhmmss = [date.getHours(), date.getMinutes(), date.getSeconds()];
  const hhmmssModified = [];
  for (const hms of hhmmss) {
    hhmmssModified.push((hms < 10 ? '0' : '') + hms);
  }
  return `${hhmmssModified[0]} : ${hhmmssModified[1]} : ${hhmmssModified[2]}`;
}

function stopTimer() {
  clearInterval(intervalID);
  intervalID = null;
  pElem.textContent = '';
}

window.addEventListener('load', addCurrentTime);
