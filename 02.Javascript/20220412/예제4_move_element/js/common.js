'use strict'
// setInterval(function(){
//   console.log('test');
// },1000);

// move elemnet
function moveElem(){
  let pos = 0;
  let elem = document.getElementById('animate');
  console.log(elem);
  setInterval(frame, 1000);

  function frame(){
   pos++;
   elem.style.top = pos + 'px';
   elem.style.left = pos + 'px';
  }
}
