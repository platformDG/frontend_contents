'use strict'
//split 사용
let num = '1,2,3,4,5';
let array = num.split(',');
console.log(array[1]);

let chatText_1 = 'how are you doing today?';
let chatText_2 = "let's go lunch";
let chatText_3 = "i am a boy";
let chatText_4 = "good luck man!!";

let str = chatText_1.split('a',1); //두번째 매개변수는 반환하는 배열의 수
console.log(str);
let ctStr = new Array();
ctStr.push( chatText_1.split(' '));
ctStr.push( chatText_2.split(' '));
ctStr.push( chatText_3.split(' '));
ctStr.push( chatText_4.split(' '));
let test = '';
test = ctStr[0][2]+" "+ctStr[0][1]+" "+ctStr[3][0]+" "+ctStr[3][2];
console.log(test);
