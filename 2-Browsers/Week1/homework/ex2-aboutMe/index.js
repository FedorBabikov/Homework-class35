'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/
document.querySelector('body').style.fontFamily = 'Arial, sans-serif';
// object with personal info
const info = { nickname: 'Batman', 'fav-food': 'pizza', hometown: 'Amsterdam' };
// take all the li's from document
const liSet = document.querySelectorAll('li');

for (const li of liSet) {
  li.classList.add('list-item');

  li.children[0].textContent = info[li.children[0].id];
}
