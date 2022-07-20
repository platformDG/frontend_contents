'use strict'; //엄격모드
//시간체크하기
const date = new Date();
let hour = date.getHours();

//조건문
//11시 이전 아침식사 , 15시 이전 점심식사, 나머지 저녁먹을 시간

if (hour < 11 && hour > 6) {
  alert('아침먹을 시간입니다.');
}else {
  if (hour < 15){ //hour < 11이 false이고, hour >= 11이 true일때
    alert('점심먹을 시간입니다.');
  }
  else {
    alert('저녁먹을 시간입니다.');
  }
}
