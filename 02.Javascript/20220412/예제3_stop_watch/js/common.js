'use strict'
let count = 0; // 숫자 카운트를 담는 변수
let t = null; // setTimeOut을 담는 변수
let timeIsOn = 0; //setTimeout의 진행여부
let m = 0;
// setTimeout 실행함수
function timeCount() { //(1초마다 한번씩 count를 증가시키는 함수)
  if (m != 0) {
    if(count == 0){
      document.getElementById('stop-watch').innerHTML = m + "분";
    }
    else{
      document.getElementById('stop-watch').innerHTML = m + "분" + count + '초';
    }
  } else {
    if(count != 0){
      document.getElementById('stop-watch').innerHTML = count + '초';
    }
  }
  count += 1;
  if (count == 60) {
    m += 1;
    count = 1;
  }
  t = setTimeout(timeCount, 1000);
}

function startCount() { //timeCount 함수를 싱행시키는 함수
  if (timeIsOn == 0) {
    timeIsOn = 1;
    timeCount();
  }
}

function stopCount() { //timeCount 함수를 싱행시키는 함수
  timeIsOn = 0;
  clearTimeout(t);
  console.log('setTimeoutdl 정지되었습니다.');
}

function resetCount(){
  timeIsOn = 0;
  clearTimeout(t);
  t = null;
  m = 0;
  count = 0;
  document.getElementById('stop-watch').innerHTML = '';
}
