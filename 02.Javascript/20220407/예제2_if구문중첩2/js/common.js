'use strict'; //엄격모드
let inputNum = Number(prompt('입력하세요','숫자'));

if(inputNum < 5 && inputNum !=null && inputNum > -1) {
  alert(`숫자 ${inputNum}은 5보다 작습니다.`);
  if(inputNum % 3 == 0){
    alert(`숫자 ${inputNum}은 3의 배수입니다.`);
  }
  else if(inputNum != 3){
    alert('입력한 값은 3과 같지 않습니다.');
  }
}
