'use strict'
let setTimeNum;
let num = prompt('숫자를 입력해주세요.','숫자');
num = Number(num);
setTimeNum = setTimeout(function(){
  alert('this is setTimeout'); //일정시간 이후 로직을 작동 시킨다.
}, 5000);

if(num > 10 ){
  clearTimeout(setTimeNum); //setTimeout 정지
  alert('setTimeout 정지하였습니다.')
}else{
  alert('setTimeout 실행하였습니다.')
}
