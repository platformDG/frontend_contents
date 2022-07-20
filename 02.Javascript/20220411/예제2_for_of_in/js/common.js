'use strict'
//변수 선언
let array = ['사과', '배', '수박', '포도', '키위', '레몬'];
let obj = {car:'승용차', phone:'아이폰', house:'아파트'};

// console.log(array);
// console.log(obj);
// console.log(obj.car);
// console.log(obj['car']);

// for(let items of array){ //반복 가능한 객체(iterable), 배열도 객체이며 array, set, map 등으로 사용할 수 있다.
//   console.log('for of 구문으로 출력하기 : '+ items);
// }

// for(let items in array ){
//   console.log('for in 구문으로 index 출력하기 : ' + items);
//   console.log('for in 구문으로 value 출력하기 : ' + array[items]);
// }

// for(let items of obj){ //일반 객체타입은 iterable 하지 않기 때문에 for of를 사용할 수 없다.
//   console.log('for of 구문으로 출력하기 : ' + items);s
// }

// for(let [key, val] of Object.entries(obj)){ //일반 객체타입을 iterable 하게 사용하기.
//   console.log('for of 구문으로 출력하기 : key:' +key+', value : ' + val );
// }

// for (let items in obj){
//   console.log('for in 구문으로 index 출력하기 : ' + items);
//   console.log('for in 구문으로 value 출력하기 : ' + obj[items]);
// }

let userMap = new Map();
userMap.set('test','ttttttt');
userMap.set('car','쏘렌토');
userMap.set('lunch','비빔밥');
// console.log(userMap);

for (let items of userMap){ //map은 순서를 가지고 있기때문에 object랑 차이가 있다.
 console.log('for in 구문으로 index 출력하기 : ' + items);
}
//console.log(userMap.has('핸드폰')); //존재하는지 체크해준다.
if(userMap.has('test')){
  console.log('test는 존재합니다.');
  console.log(userMap.get('test'));
  console.log(userMap.size);
}
// for(let items of userMap){
//   console.log(items);
// }
