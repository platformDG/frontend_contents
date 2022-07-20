'use strict'; //엄격모드
//number string test
window.onload = function(){ //윈도우가 로드된 후 실행문 실행
  let num = 1;
  let textnum = "안녕하세요";
  let numberVar = 10;
  // console.log(num + numberVar);
  let changeString = String(num);
  let changeNumber = null;

  // console.log(changeString + numberVar);
  // console.log('값 : ' + changeString + ', 데이터타입: ' + typeof(changeString));

changeString += numberVar;
changeNumber = Number(changeString);
console.log('값 : ' + changeNumber + ', 데이터타입: ' + typeof(changeNumber));
// console.log(changeString);
}
