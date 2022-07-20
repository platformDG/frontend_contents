'use strict'; //엄격모드
//시간체크하기
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1; //현재 월단위 0(1월)부터 시작한다.
let day = date.getDate();
let week = date.getDay();
let hour = date.getHours();
let minutes = date.getMinutes(); //현재분단위
// console.log('현재시간은 : '+ date);
// console.log('현재분은 : '+ minutes);
// console.log('현재월은 : '+ month);
 console.log('현재시간은 : '+ hour);

if (week == 0){
  week = '일요일';
}
else if(week == 1){
  week = '월요일';
}
else if(week == 2){
  week = '화요일';
}
else if(week == 3){
  week = '수요일';
}
else if(week == 4){
  week = '목요일';
}
else if(week == 5){
  week = '금요일';
}
else if(week == 6){
  week = '토요일';
}

// 오전 오후 확인 조건문
if (hour > 12){
  console.log('오후입니다.');
  alert(`오늘은 ${year}년 ${month}월 ${day}일 ${week} 오후 ${hour%12}시 ${minutes}분입니다.`);
}
else if (hour < 12){
  console.log('오전입니다.');
  alert(`오늘은 ${year}년 ${month}월 ${day}일 ${week} 오전 ${hour}시 ${minutes}분입니다.`);
}
else{
  console.log('정오입니다.');
}
