'use strict'; //엄격모드
let inputX = prompt('x의 값을 입력하세요','숫자');
let inputY = prompt('y의 값을 입력하세요','숫자');

//입력값 형변환
inputX = Number(inputX);
inputY = Number(inputY);

//입력값 확인 log
console.log(typeof(inputX));
console.log(typeof(inputY));

// 입력값 확인 안내
if (typeof(inputX) == 'number' && typeof(inputX) == 'number'){
  alert('입력값이 입력완료 되었습니다.');
}
else{
  alert('입력값을 확인해주시기 바랍니다');
}

//입력값 비교부분
if (inputX == inputY){
  alert('X는 Y와 같습니다.')
}
else if (inputX >= inputY){
  alert('X는 Y보다 큽니다.')
}
else if (inputX <= inputY){
  alert('X는 Y보다 작습니다.')
}
