'use strict'
//query selector
let num = 0;
function textMove(){
  // num = num + 10;
  num += 10;
  let txtNum = document.querySelector('li .txt');
  txtNum.style.backgroundColor = "red";
  txtNum.style.position = "relative";
  txtNum.style.left = `${num}px`;
  txtNum.style.top = `${num-5}px`;
  //console.log();
}
