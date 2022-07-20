'use strict'; //엄격모드
// for구문 check date
let startTime = new Date().getTime(); //현재 시간

for (let i = 0; new Date().getTime() < startTime + 1000 ; i++){
  // console.log(`${startTime}, ${new Date().getTime()}`);
  console.log(i);
}
