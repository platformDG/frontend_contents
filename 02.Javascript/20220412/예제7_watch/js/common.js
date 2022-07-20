'use strict'
// live watch
let t = null;
function startTime(){
  let today = new Date(); //날짜 생성자
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  // console.log(h+":"+m+":"+s);
  // 구간 설정
  // h = 16;
  // m = 59;
  if (h > 15 && h < 17 && m > 49) {
    document.getElementById('txt').innerHTML = '7교시종료!!!!!! 쉬는시간!';
  }
  else if ( h > 16 && m > -1){
    document.getElementById('txt').innerHTML = '8교시 시작입니다. 마지막 아자!';
  }
  else{
    document.getElementById('txt').innerHTML = displayT(h)+":"+displayT(m)+":"+displayT(s);
  }
  t = setTimeout(startTime, 1000);
}
startTime();

function displayT(hours){
  if (hours < 10){
    hours = "0"+hours;
  }
  return hours;
}
