'use strict'; //엄격모드
//함수 선언
/*
// 변수를 선언해서 함수를 담는 모습
var repeat = function(){
  alert('나는 익명함수 입니다.');
}
// console.log(typeof(repeat));
repeat();

// 함수를 선언할때 이름을 선언하는것.
function repeat(){
  alert('나는 선언적함수 입니다.');
}

repeat();


 // 함수를 호출하면 익명함수가 실행된다.
 // 이유 : 선언적 함수가 먼저 생성되고 익명함수가 나중에 생성되기 때문이다.
 // 호이스팅으로 나중에 생성되는것은 선언영역의 아래쪽에 배치 되기 때문이다.
*/

// 전역변수 / 지역변수
// 전역변수 : num, sumTotal
// 지역변수 : i, j, sumCalc, checkNum
let num = 10;
function testFunction(i,j){
  let checkNum = 20;
  let sumCalc = i + j + num + checkNum;
  return sumCalc;
}

let sumTotal = testFunction(1,0);
console.log(`함수에서 반환한 값을 출력 : ${sumTotal}`);
