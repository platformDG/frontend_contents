'use strict'; //엄격모드
//for 구문

// let inputText = prompt('과일 입력!');
let arrayFruits =['사과', '배', '수박', '포도', '수박', '키위', '레몬'];
// console.log(arrayFruits);
//
// for (let i = 0; i < arrayFruits.length; i++){
//   if (arrayFruits[i] == inputText ){
//       alert(`맛있는 ${arrayFruits[i]}`);
//   }
// }

/*
//for구문에서 특정 구간에서 for구문 정리
let outPut = '';
for (var i = 0; i < 10; i++){
  outPut += '@';
  console.log(outPut);
  if ( i == 5 ){
    break;
  }
}
*/

let inputText = prompt('과일 입력!');
let checkNum = 0; //재고가 없때 1일때는 재고가 있다.
// 재고확인
for(var i = arrayFruits.length; i >= 0; i--){
  if (inputText == arrayFruits[i] ) {
    alert(`맛있는 ${arrayFruits[i]}`);
    checkNum = 1;
  }
  else if(i == 0 && checkNum == 0){
    alert('해당 상품의 재고가 없습니다.');
  }
}
