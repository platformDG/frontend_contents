'use strict'
// live watch
let t = null;
let h;
let h2;
let m;
let m2;
let s;
let bool = false;
function startTime(){
  //let elem = document.getElementById('txt');
  //console.log(elem);
  let today = new Date(); //날짜 생성자
  h = checkTime(today.getHours());
  m = checkTime(today.getMinutes());
  s = checkTime(today.getSeconds());

  document.getElementById('btn').addEventListener('click',setTime);
  document.getElementById('cbtn').addEventListener('click',function(){
    bool = false;
    document.getElementById('hour').value = null;
    document.getElementById('min').value = null;
  });

  if (bool == true){
    h = h2;
    m = m2;
  }

  //이미지 셋팅
  if( h == 9 && m <= 59 || h == 10 && m <= 59 ){
    styleChange('url(./img/9-11.jpg)', '#e4180d');
    setHtml('투데이특가!!',h,m,s,'#e4180d');
  }
  else if( h == 11 && m <= 59 || h == 12 && m <= 59 ){
    styleChange('url(./img/11-12.png)', '#e4180d');
    setHtml('투데이특가!!',h,m,s,'#e4180d');
  }
  else if( h == 13 && m <= 59 ){
    styleChange('url(./img/lunch.jpg)', '#cb81d4');
    setHtml('점심시간!',h,m,s,'#cb81d4');
  }
  else if( h == 14 && m <= 59 ){
    styleChange('url(./img/14-15.jpg)', '#ccdcfe');
    setHtml('구강용품사러 가자!',h,m,s,'#ccdcfe');
  }
  else if( h == 15 && m <= 59 ){
    styleChange('url(./img/15-16.jpg)', '#b1a39a');
    setHtml('TV는 역시 LG!',h,m,s,'#b1a39a');
  }
  else if( h == 16 && m <= 59 ){
    styleChange('url(./img/16-17.jpg)', '#e4f1f7');
    setHtml('여행가고싶어요~!',h,m,s,'#e4f1f7');
  }
  else if( h == 17 && m <= 59 ){
    styleChange('url(./img/17-18.jpg)', '#4747ff');
    setHtml('사진 제공해준 위메프 PPL시간',h,m,s, '#4747ff');
  }
  else{
    styleChange('url(./img/out.gif)', '#000');
    setHtml('안녕히계세요~',h,m,s, '#000');
  }
  t = setTimeout(startTime, 1000);
}

function styleChange(url, color){
  document.getElementById("img-box").style.backgroundImage = url;
  document.getElementById("img-box").style.backgroundColor = color;
}
function setHtml(txt, h, m, s, color){
  document.getElementById('txt').innerHTML = `<p>${txt}</p>${h}:${m}:${s}`;
  document.getElementById("txt").style.backgroundColor = color;
}

function checkTime(i) {
  if (i < 10){
     i = "0" + i;
   }
   return i;
}

function setTime(){
  bool = true;
  h2 = document.getElementById('hour').value;
  m2 = document.getElementById('min').value;
  if(h2 < 0 || h2 > 24 || h2 == '' || m2 < 0 || m2 > 60 || m2 == ''){
    alert('문제발생');
    document.getElementById('hour').value = null;
    document.getElementById('min').value = null;
    bool = false;
  }
}
