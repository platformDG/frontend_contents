'use strict'
// live watch
let t = null;
function startTime(){
  //let elem = document.getElementById('txt');
  //console.log(elem);
  let today = new Date(); //날짜 생성자
  let h = checkTime(today.getHours());
  let m = checkTime(today.getMinutes());
  let s = checkTime(today.getSeconds());
  // console.log(document.body.style);

  if( h == 12 && m > 49 || h == 13 && m <= 59){
    document.body.style.backgroundImage = 'url(./img/background_01.gif)';
    document.body.style.backgroundColor = '#ffffff';
    document.getElementById('txt').innerHTML = `<p>Let&acute;s Lunch Time</p>${h}:${m}:${s}`;
  }
  else{
    document.body.style.backgroundImage = 'url(./img/background_02.jpg)';
    document.body.style.backgroundColor = '#67c7b2';
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}`;
  }
  t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10){
     i = "0" + i;
   }
   return i;
}


// let t = null;
// function startTime(){
//   let today = new Date(); //날짜 생성자
//   let h = today.getHours();
//   let m = today.getMinutes();
//   let s = today.getSeconds();
//   // console.log(h+":"+m+":"+s);
//   // 구간 설정
//   // h = 16;
//   // m = 59;
//   if (h > 15 && h < 17 && m > 49) {
//     document.getElementById('txt').innerHTML = '7교시종료!!!!!! 쉬는시간!';
//   }
//   else if ( h > 16 && m > -1){
//     document.getElementById('txt').innerHTML = '8교시 시작입니다. 마지막 아자!';
//   }
//   else{
//     document.getElementById('txt').innerHTML = displayT(h)+":"+displayT(m)+":"+displayT(s);
//   }
//   t = setTimeout(startTime, 1000);
// }
// startTime();
//
// function displayT(hours){
//   if (hours < 10){
//     hours = "0"+hours;
//   }
//   return hours;
// }
