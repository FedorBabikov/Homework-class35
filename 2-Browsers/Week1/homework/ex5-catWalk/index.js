'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/

// some constants for the cat's URL's
const CAT_WALK = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
const CAT_DANCE =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

// get reference to the img and set it's initial position and picture
// set the initial URL for the img in this JS file, not in the HTML
const img = document.querySelector('img');
img.style.left = '0px';
img.setAttribute('src', CAT_WALK);

function catWalk() {
  // on every call get the number from the style prop string
  const imgPosition = +img.style.left.match(/\d+/)[0];

  if (
    //distance between the img center and the viewport center less then 5px (half of the step)
    getDistanceToCenter(imgPosition)
  ) {
    //true: change img -> wait 5sec -> change img back -> move it -> recall the function
    img.setAttribute('src', CAT_DANCE);
    setTimeout(() => {
      img.setAttribute('src', CAT_WALK);
      img.style.left = `${imgPosition + 10}px`;
      catWalk();
    }, 5000);
  } else {
    //false: just move img -> wait 50 Msec -> recall the function
    img.style.left =
      imgPosition < window.innerWidth - img.naturalWidth
        ? `${imgPosition + 10}px`
        : '0px';
    setTimeout(catWalk, 50);
  }
}

function getDistanceToCenter(imgPosition) {
  return (
    Math.abs(window.innerWidth / 2 - (imgPosition + img.naturalWidth / 2)) < 5
  );
}

window.addEventListener('load', catWalk);
