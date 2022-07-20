'use strict'
function textFunc(){
  let leng = document.querySelector('#text').classList;
  // console.log(leng[1]);
  /* contains method는 classlist에 해당 클래스가 포함되어 있는지 확인하여
  boo
  lean type으로 반환한다. */
  // let bulNum = document.querySelector('#text').classList.contains('change-bg');
  // console.log(bulNum);
}

function sideMenuSlide(){
  let bulNum = document.querySelector('#sidemenu').classList.contains('on');
  if (bulNum == true){
    document.querySelector('#sidemenu').classList.remove('on');
  }
  else{
    document.querySelector('#sidemenu').classList.add('on');
  }
}
