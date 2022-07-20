'use strict'
//substring 사용
let a = '1234567890';
// let abc = a.substring(2,5);
// let abc = a.substring(5,2);
// let abc = a.substring(-5);
// let abc = a.substring(0);
// console.log(abc);

let stringText = 'hello this is string'
//substring() 매서드 사용 hi라는 값을 출력.
console.log(stringText.substring(7,9));

let infoText = "안녕하세요. 저는 대구에 서는 홍길동 입니다. 나이는 20세 입니다.";
let age = infoText.substring(30,32);
let name = infoText.substring(17,20);
let area = infoText.substring(10,12);
console.log(`나이 : ${age}세, 이름 : ${name}, 지역: ${area}`);
