'use strict'; //엄격모드
// 중첩 for 구문
// 홀수 짝수 구분하여서 별찍기
let outPut ='';
for(var i = 0; i < 10; i++){
    // 실행문
    // i가 홀수일때는 /*
    // i가 짝수일때는 /**
    if (i % 2 == 0){
      outPut += "/**";
    }
    else{
      outPut += "/*";
    }
    console.log(outPut);
}
