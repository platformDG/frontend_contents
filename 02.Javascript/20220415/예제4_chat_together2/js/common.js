'use strict'
let inputTxt = '';

function inputChat(event){ //키보드 타이핑 및 엔터 버튼 실행
  if( window.event.keyCode == 13 ){
    if (event.value != ''){ //입력창이 비어있지 않을 때
      chattingFunc(event, 0);
      clearText(inputTxt, event, 0);
    }
  }
}
function chattingFunc(e,i){
  // console.log(e.previousElementSibling.value);
  // let inputTxt;
  if(i == 1){
    inputTxt = e.previousElementSibling.value;
  }
  else{
    inputTxt = e.value;
  }

  let elem = document.querySelectorAll('.chat-box');
  let thisClassName = e.getAttribute('class'); // user-a, user-b, user-c
  let elemLeng = elem.length;
  let txt = []; // 채팅창에서 입력값 받기
  let htmlTxt = []; // 채팅창 내용 담을 변수

  for(var i = 0; i<elemLeng; i++){
    htmlTxt[i] = elem[i].innerHTML; //기존 채팅목록을 가져옴
  }

  if (thisClassName == 'user-a'){
    txt.push(`<div class="line char-a right"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-a"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-a"><div class="txt">${inputTxt}</div></div>`);
  }
  else if (thisClassName == 'user-b'){
    txt.push(`<div class="line char-b"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-b right"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-b"><div class="txt">${inputTxt}</div></div>`);
  }
  else if (thisClassName == 'user-c'){
    txt.push(`<div class="line char-c"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-c"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class="line char-c right"><div class="txt">${inputTxt}</div></div>`);
  }

  for(let i = 0; i < elemLeng; i++){
    htmlTxt[i] += txt[i];
    elem[i].innerHTML = htmlTxt[i]; //입력된 값을 포함하여 대화창으로 다시 입력
    elem[i].scrollTop = elem[i].scrollHeight - elem[i].offsetHeight; //스클홀이 생겨서 최신 대화내용이 스크롤 영역으로 들어가서 안 보일 경우
  }
}

//
function sendText(e){ //보내기 버튼 실행
  if( e.previousElementSibling.value != '' ) { //입력창이 비어있지 않을때 실행
    chattingFunc(e,1);
    clearText(inputTxt, e, 1);
  }
}

function clearText(t,e,i){ //t : htmlTxt , event
  t = '';
  inputTxt = t;
  if(i == 1){
    e.previousElementSibling.value = '';
  }
  else{
    e.value = '';
  }
}
