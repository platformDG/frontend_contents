'use strict'; //엄격모드
//배열선언
let korean = [85,75,88,90,95,97,77,80,100,88]; //국어
let math = [85,75,88,90,95,97,77,80,90,88]; //수학
let english = [85,75,88,87,90,95,77,85,100,88]; //영어

function avgFunc(arrayNum){ //평균구하기
  let total = 0; //점수의 합계
  let scoreLeng = arrayNum.length; //인덱스 갯수 : 학생들 점수
  let scoreAvg;
  // console.log(scoreLeng);
  for(var i = 0; i < scoreLeng; i++){
    total += arrayNum[i];
  }
  scoreAvg = total / scoreLeng
  return scoreAvg;
}

console.log(`국어 평균점수 : ${avgFunc(korean)}, 수학 평균점수 : ${avgFunc(math)}, 영어 평균점수 : ${avgFunc(english)}`);
