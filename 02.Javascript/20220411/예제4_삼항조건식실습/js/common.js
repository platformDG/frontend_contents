'use strict'
let inputText = Number(prompt('숫자를 입력하세요.','숫자'));
inputText = Math.abs(inputText);
inputText % 2 == 0 ? alert( inputText + '는 짝수입니다.' ) : alert( inputText + '는 홀수입니다.' );
