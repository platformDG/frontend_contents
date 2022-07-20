'use strict'
let nameStr = ['박길동','홍길동','이길동'];
let str = 'hello javascript';
let strNum = '20200413';
let numberText = '1234567890';
// console.log(str[0]);
// console.log(str.length);
// console.log(numberText.substr(1,1));
// console.log(str.substr(0));
// let ntNum_01 = numberText.substr(1,1);
// console.log(ntNum_01);
let testTxt ='';

testTxt = `오늘은 ${strNum.substr(6,2)}일 입니다.\n저는 ${nameStr[0]} 입니다.\n나이는 ${numberText.substr(1,2)}세입니다.`
console.log(testTxt);
