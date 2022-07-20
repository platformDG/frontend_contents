'use strict'
/*
표기방법에 따른 분류
익명함수
function(){}
선언적 함수
function textFunc(){}

사용방법에 따른 분류
재귀함수
function textFunc(){
  textFunc;
}
콜백함수 : 다른 함수의 매개변수를 사용되거나, event로 특정시점에 호출되는 함수
비동기적으로 작동될때 사용
*/

function avgCalc(a,b,c){
  let sum = a + b;
  c(sum);
}

// 익명함수로 콜백함수 호출
avgCalc(10,30,function(num){
  let avg = num/2;
  console.log(avg);
})

//arrow function으로 콜백 함수 호출
avgCalc(10,30,(num)=>{
  let avg = num/2;
  console.log(avg);
})

//선언적 함수로 콜백함수 부르기
function avg(num){
  let avg = num/2;
  console.log(avg);
}

avgCalc(50,100,avg);

// window.onload = function(){
//   document.getElementById('wrap').innerHTML = myFunction();
//   function myFunction(){
//     return this;
//   }
// }

function areaFunc(a,b,c) {
  let multi = a * b;
  return c(multi);
}

function squareFunc(result){
  // console.log(result);
  return result;
}
console.log(areaFunc(10,20,squareFunc));

// console.log(calcArea(10,20,square));
