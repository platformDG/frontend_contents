//변수 선언
console.log('자료형');
// console.log();
// arelt();
// typeof();
console.log(typeof('hello javascript')); //문자형타입을 출력
console.log(typeof(123456)); //숫자타입을 출력
console.log(typeof(true)); //불린타입을 출력
console.log(typeof(function(){})); //함수타입을 출력
console.log(typeof({})); //객채타입을 출력
console.log(typeof([])); //배열타입(객채)을 출력

/*
//문자열과 조합
var stringVar = '안녕하세요';
var numberVar = 10;
var sum = stringVar + numberVar;
console.log(typeof(sum));
console.log(sum);
*/
/*
// 숫자를 입력한 문자열과 조합
var stringVar = '50';
var numberVar = 10;
var sum = stringVar + numberVar;
console.log(sum);
*/
// 숫자형과 숫자형의 조합
var strVar = 50;
var numVar = 10;
var sum = strVar + numVar;
console.log(strVar +','+typeof(strVar));
console.log(numVar +','+typeof(numVar));
console.log(sum +','+typeof(sum));
