'use strict'
let elem = document.getElementsByClassName('box')[0];
let t = null;
let pos = 0;
let on = false;

moveElem();

function moveElem(){
  if(on == false){
    t = setInterval(frame, 10);
    function frame()  {
      pos++;
      elem.style.left = pos + 'px'
    }
  }
  on = true;
}

function startMove(){
  moveElem();
  elem.style.animationName ='turnBall';
}

function stopMove(){
  clearInterval(t);
  on = false;
  elem.style.animationName ='aa';
}

function returnMove(){
  stopMove();
  pos = 0;
  elem.style.left = pos + 'px'
}
