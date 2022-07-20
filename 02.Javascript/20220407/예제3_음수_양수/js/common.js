'use strict'; //엄격모드
let num = Number(prompt('입력하세요','숫자'));

if(num != null && isNaN(num) != true ) {
  if(num < 0){
    alert(`입력하신 숫자 ${num}는 음수입니다.`);
  }
  else if(num > 0) {
    alert(`입력하신 숫자 ${num}는 양수입니다.`);
  }
  else {
    alert(`입력하신 숫자 ${num}입니다.`);
  }
}
else{
  alert('입력이 잘못 되었습니다.');
}
