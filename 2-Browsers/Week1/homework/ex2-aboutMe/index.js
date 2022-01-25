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

// take all the li's from document
function getElementSet(type) {
  return document.querySelectorAll(type);
}

function liModifier() {
  // object with personal info
  const info = {
    nickname: 'Batman',
    'fav-food': 'pizza',
    hometown: 'Amsterdam',
  };

  for (const li of getElementSet('li')) {
    const appendedText = info[li.children[0].id];

    li.classList.add('list-item');
    li.children[0].remove();
    li.textContent += appendedText;
  }
}

liModifier();
