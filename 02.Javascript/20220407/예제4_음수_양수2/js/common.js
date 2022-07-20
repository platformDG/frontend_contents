'use strict'; //엄격모드
let inputText = prompt('입력하세요','숫자');
var num;
if(inputText === '숫자' || inputText === '' ){
  alert('입력된 숫자가 없습니다.');
}
else{
  num = Number(inputText);
  if(isNaN(num)){
    alert('숫자를 입력해주세요.');
  }
  else if(num < 0){
    alert(`입력하신 숫자 ${num}는 음수입니다.`);
  }
  else if(num > 0) {
    alert(`입력하신 숫자 ${num}는 양수입니다.`);
  }
  else {
    alert(`입력하신 숫자 ${num}입니다.`);
  }
}
