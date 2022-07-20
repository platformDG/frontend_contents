'use strict'
// mover elements
let elem = document.getElementsByClassName('box')[0];

let xMove = 0;
let yMove = 0;
let xDirection = 1;
let yDirection = 1;
let moveInterval = setInterval(move, 1);
console.log(window.innerHeight);
function move(){
  xMove = xMove + 1*xDirection;
   yMove = yMove + 1*yDirection;
  if( xMove > window.innerWidth - 100 || xMove < 0 ){
    xDirection = xDirection * (-1);
  }
  if( yMove > window.innerHeight - 100 || yMove < 0 ){
    yDirection = yDirection * (-1);
  }
  elem.style.left = `${xMove}px`;
  elem.style.top = `${yMove}px`;
}
