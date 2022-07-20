'use strict'; //엄격모드
let inputText = Number(prompt('숫자를 입력하세요', '숫자'));
let total = 0;
console.log(inputText);
if (inputText === '숫자' || inputText === '' || inputText <= 0) {
  alert('숫자를 입력해주시기 바랍니다.');
} else {
  function repeat(f_num) {
    total += f_num
    f_num--;
    if (f_num != 0) {
      repeat(f_num)
    } else {
      return 0;
    }
  }
  repeat(inputText);
  console.log(total);
}
