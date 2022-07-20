'use strict'; //엄격모드
// 중첩 for 구문
// 피라미드 별찍기
let outPut = '';
for (var i = 0; i < 15; i++) {
  for (var j = 15; j > i; j--) {
    outPut += ' ';
  }
  for (var k = 0; k < i * 2 - 1; k++) {
    outPut += '*';
  }
  outPut+= '\n'
}

for (var i = 15; i > -1; i--) {
  for (var j = 15; j > i; j--) {
    outPut += ' ';
  }
  for (var k = 0; k < i * 2 - 1; k++) {
    outPut += '*';
  }
  outPut+= '\n'
}
console.log(outPut);
