'use strict'; //엄격모드
/*
// number string prompt test
const num = 10;
let inputText = prompt("숫자를 입력해주세요.",'숫자');
// console.log(typeof(inputText));
// console.log(num + Number(inputText));
let changeNumber = Number(inputText);
changeNumber += num
console.log(changeNumber);
*/

// 반지름 입력 값에 따라 원의 둘레 구하기
const pi = 3.14159265;
let radiusNum = prompt("원의 둘레 구하기",'반지름을 입력해주세요, 숫자');
let cirNum, cirArea;
radiusNum = Number(radiusNum);
console.log(`입력한 반지름 : ${radiusNum}, 데이터 타입 : ${typeof(radiusNum)}`);
cirNum = 2 * pi * radiusNum;
cirArea = pi * radiusNum * radiusNum;
alert(`반지름은 ${radiusNum}이고, 원의 둘레는 ${cirNum}, 원의 넓이는 ${cirArea}`);
