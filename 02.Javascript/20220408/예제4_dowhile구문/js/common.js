'use strict'; //엄격모드
//do~while 구문
let foods = new Array();
foods.push('중식','한식','양식');
let count = 0;
do{
  console.log(foods[count]);
  count++;
}while( count < foods.length );
