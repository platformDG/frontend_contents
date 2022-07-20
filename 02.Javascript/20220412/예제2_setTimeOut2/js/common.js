'use strict'
// let setTimeNum;
// let num = prompt('숫자를 입력해주세요.','숫자');
// num = Number(num);
// setTimeNum = setTimeout(function(){
//   alert('this is setTimeout'); //일정시간 이후 로직을 작동 시킨다.
// }, 5000);
//
// if(num > 10 ){
//   clearTimeout(setTimeNum); //setTimeout 정지
//   alert('setTimeout 정지하였습니다.')
// }else{
//   alert('setTimeout 실행하였습니다.')
// }

function timeText(){
    let x = document.getElementById('txt');
    // x.value ='this setTimeout'
    setTimeout(function(){ x.value ='2초'},2000);
    setTimeout(function(){ x.value ='4초'},4000);
    setTimeout(function(){ x.value ='8초'},8000);
    setTimeout(function(){ x.value ='9초'},9000);
    setTimeout(function(){ x.value ='12초'},12000);
}
