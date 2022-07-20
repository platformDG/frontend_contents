'use strict'; //엄격모드
// let array = [123,345,567];
// let lastIndex = array.length - 1;
// console.log(`첫번째 배열값은 ${array[0]} 입니다.`);
// console.log(`마지막 배열값은 ${array[lastIndex]} 입니다.`);

// let inputText = prompt('과일을 입력해주세요','과일명');
let myFruits = '포도';
let count = 0;
let fruits = ['사과', '배','수박','포도'];
// fruits.push('딸기'); //배열의 마지막에 요소를 추가
// fruits.push('매론');
// fruits.push('참외');
// fruits.pop(); //배열의 마지막에 요소를 제거
// console.log(fruits);
// // fruits.shift(); //배열의 첫번째 요소를 추출하고 삭제하는 메소드
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);
// fruits.unshift('오렌지');
// console.log(fruits);
// fruits.splice(0,0,'키위');
// console.log(fruits);
// alert(`총 과일의 개수는 ${fruits.length}개 입니다.`);

// 재귀함수: 하나의 함수를 반복하여 작동하는 함수
// 선언방법
function checkFunc() {
  // 실행코드 작성영역
  if(count < fruits.length ){
    console.log(fruits[count]);
    if(myFruits == fruits[count] ) {
      console.log(`${ fruits[count] }는 제가 좋아하는 과일입니다.`);
    }
    count++;
    checkFunc();
  }
  // console.log('this is function!!');

}

//호출방법
checkFunc();
