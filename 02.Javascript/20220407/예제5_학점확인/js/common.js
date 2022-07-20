'use strict'; //엄격모드
let inputText = prompt('학점을 입력하세요','숫자');
var grade;
if(inputText === '숫자' || inputText === '' ){
  alert('영문자/한글/특수문자는 사용할 수 없습니다. \n 숫자를 입력해주세요.');
}
else{
  grade = Number(inputText);
  if(isNaN(grade)){
    alert('숫자를 입력해주세요.');
  }
  else if(grade >4.5 || grade < 0.0){
    alert('학점의 범위가 넘어 갑니다.');
  }
  else if(grade >=4.3 && grade <= 4.5){
    alert(`학점 ${grade}은 'A+'입니다.`);
  }
  else if(grade >=3.9 && grade <= 4.2){
    alert(`학점 ${grade}은 'A0'입니다.`);
  }
  else if(grade >=3.5 && grade <= 3.8){
    alert(`학점 ${grade}은 'A-'입니다.`);
  }
  else if(grade >=3.2 && grade <= 3.4){
    alert(`학점 ${grade}은 'B+'입니다.`);
  }
  else if(grade >=2.9 && grade <= 3.1){
    alert(`학점 ${grade}은 'B0'입니다.`);
  }
  else if(grade >=2.5 && grade <= 2.8){
    alert(`학점 ${grade}은 'B-'입니다.`);
  }
  else if(grade >=2.2 && grade <= 2.4){
    alert(`학점 ${grade}은 'C+'입니다.`);
  }
  else if(grade >=1.9 && grade <= 2.1){
    alert(`학점 ${grade}은 'C0'입니다.`);
  }
  else if(grade >=1.5 && grade <= 1.8){
    alert(`학점 ${grade}은 'C-'입니다.`);
  }
  else if(grade >=1.2 && grade <= 1.4){
    alert(`학점 ${grade}은 'D+'입니다.`);
  }
  else if(grade >=0.9 && grade <= 1.1){
    alert(`학점 ${grade}은 'D0'입니다.`);
  }
  else if(grade >=0.1 && grade <= 0.8){
    alert(`학점 ${grade}은 'D-'입니다.`);
  }
  else {
    alert(`학점 ${grade}은 'F'입니다.`);
  }

}
