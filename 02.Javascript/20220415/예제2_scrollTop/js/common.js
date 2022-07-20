'use strict'
let numY = 0; //y축 scroll 변수
let numX = 0; //x축 scroll 변수
let elem;
let ctnElem;
//y축 scroll작동 함수
elem = document.querySelector('#mydiv');
ctnElem  = document.querySelector('#content');
function scrollTopFunc() {
  // numY = numY + 10;
  numY += 10;
  elem.scrollTop = numY;
  console.log(elem.scrollTop);
  // console.log(`scroll height : ${elem.scrollHeight}, offset height : ${elem.offsetHeight}`);
  // console.log(`scroll width : ${elem.scrollWidth}, offset width : ${elem.offsetWidth}`);
}

function scrollBottomFunc(){
  numY -= 10;
  if (numY < 0) {
    numY = 0;
  }
  elem.scrollTop = numY;
  console.log(elem.scrollTop);
}


function scrollRightFunc(){
  numX += 10;
  elem.scrollLeft = numX;
  console.log(ctnElem.offsetWidth);
  console.log(numX);
  console.log(elem.scrollLeft);
}

function scrollLeftFunc(){
  numX -= 10;
  if (numX < 0) {
    numX = 0;
  }
  elem.scrollLeft = numX;
}
