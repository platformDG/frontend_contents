'use strict'
//query selector

function innerTxt(){
  // document.querySelector('.content > p').innerHTML = "hello query selector!!";
  let itext = document.getElementById('inputText').value;
  document.querySelector('.content h2 p').innerHTML = itext;
  document.getElementById('inputText').value ='';
}
