'use strict'
function sideMenuSlide(){
 let num = document.querySelector('#sidemenu').getAttribute('class');
 document.querySelector('#sidemenu').classList.toggle('on');
  // console.log(document.querySelector('#sidemenu').getAttribute('class'));
  // if (num == 'on'){ //on class가 있을때
  //   //on을 삭제하는 코드
  //   document.querySelector('#sidemenu').classList.remove('on');
  // }else{
  //   //on을 추가하는 코드
  //   document.querySelector('#sidemenu').classList.add('on');
  // }
}
