'use strict'; //엄격모드
// 함수선언
//가로 2, 세로3인 사각형의 넓이는 sqArea() 입니다.
//가로 2, 세로3인 삼각형의 넓이는 triArea() 입니다.

let inputX = prompt('가로의 길이는 ?', '가로');
let inputY = prompt('세로의 길이는 ?', '세로');

console.log(`가로 : ${inputX} 세로 : ${inputY} 의 사각형 넓이는 ${sqArea(inputX, inputY)}`);
console.log(`가로 : ${inputX} 세로 : ${inputY} 의 삼각형 넓이는 ${triArea(inputX, inputY)}`);

function sqArea(x , y){
  return x*y;
}
function triArea(x , y){
  return (x*y)/2;
}
