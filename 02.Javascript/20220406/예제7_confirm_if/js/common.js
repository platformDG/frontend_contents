'use strict'; //엄격모드
let inputText = confirm('회원가입을 하시겠습니까 ?');
 console.log(inputText);

 if ( inputText ) {
   alert('회원가입이 완료 되었습니다.');
 }
 else{
   alert('회원가입이 취소 되었습니다.');
 }

 // if ( inputText == true) {
 //   alert('회원가입이 완료 되었습니다.');
 // }
 // else if(inputText == false){
 //   alert('회원가입이 취소 되었습니다.');
 // }
