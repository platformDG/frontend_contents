'use strict'; //엄격모드
let count = 0;
let mCount = 0;
let mobile = ['갤럭시S21', '갤럭시S21+','갤럭시S21울트라','갤럭시S22','갤럭시S22+','갤럭시S22울트라','아이폰13미니','아이폰13','아이폰13프로','아이폰13프로맥스','갤럭시Z플립3','갤럭시Z폴더3'];
let inputText = prompt('어서오세요 XX모바일 입니다\n원하시는 모델이 있으시면 적어주세요','모델명');
if(inputText === '모델명' || inputText === ''){
  alert('찾으시는 모델을 정확하게 입력해주시기 바랍니다.');
}
else{
  checkFunc();
  if(mCount == mobile.length){
    alert(`검색하신 ${inputText}는 재고가 없습니다.`)
  }
}

function checkFunc() {
  if(count < mobile.length ){
    console.log(mobile[count]);
    if(inputText == mobile[count] ) {
      alert(`검색하신 ${inputText}는 재고가 있습니다.`)
      if(confirm('구매하시겠습니까 ?')){
        alert('구매가 완료 되었습니다.');
      }
      else{
        alert('구매가 취소 되었습니다.');
      }
    }
    else {
      mCount++;
    }
    count++;
    checkFunc();
  }
}
