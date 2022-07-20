'use strict'; //엄격모드
//숫자나열
//변수선언
let num = '';
let count = 0; // 작은 숫자부터 큰 숫자까지 개수

function repeat(i,j){ // i는 시작하는 숫자, j는 끝나는 숫자
  //실행코드
  if( count == 0 ){
    num += i;
  }else if( i > j ){ //최대숫자 제한
    return 0;
  }else { //초기 실행이 아니라면 콤마추가
      num += ','+i
  }
  i++;
  count++;
  repeat(i,j);
}

repeat(50, 80);
console.log(num);
