'use strict'
//
let num = new Array();
for(var i = 0; i < 6; i++){
  num.push(Math.ceil(Math.random() * 46));
}
// num.push = Math.ceil(Math.random() * 46);//Number(prompt('1~10숫자를 입력해주세요.','숫자'));
console.log(num);
function getNumber(){
  for(var i= 0; i<6; i++){
    document.querySelectorAll('div')[num[i]-1].setAttribute('class','selected');
  }
}
