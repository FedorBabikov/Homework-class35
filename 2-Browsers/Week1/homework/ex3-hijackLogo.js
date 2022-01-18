'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/

// This code works in all browsers' console, but the unit tests here give errors...
function hijackGoogleLogo() {
  const logo = document.querySelector('img.lnXdpd');
  logo.setAttribute(
    'src',
    'https://www.hackyourfuture.dk/static/logo-dark.svg'
  );
  logo.setAttribute(
    'srcset',
    'https://www.hackyourfuture.dk/static/logo-dark.svg'
  );
}

hijackGoogleLogo();
