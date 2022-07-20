'use strict'
//query selector
function textColorChange(){
  // document.getElementsByTagName('p')[0].style.color = 'red';
  // document.querySelector('.txt').style.color = 'blue';
  let txtNum = document.querySelectorAll('p');
  console.log(txtNum.length);
  for(var i = 0; i < txtNum.length; i++){
      txtNum[i].style.color= 'red';
  }
}
