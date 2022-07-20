'use strict'
//attribute

// let x = document.querySelectorAll('div')[0].getAttribute('id');
// console.log(document.querySelectorAll('div')[0]);
// console.log(x);

// let num = document.querySelector('.container > div').getAttribute('class');
// console.log(num);

// 로고 href 속성값 가져오기
let hrefNum = document.querySelector('header h1 a');

// console.log(hrefNum);
// hrefNum.setAttribute('href', 'http://daum.net');
// hrefNum.setAttribute('class','link');
//setAttribute의 첫번째 인자는 속성의 name값이고, 두번째 인자는 속성의 값을 입력한다.

// href 속성값을 가져와서 split로 naver를 추출하기.
// let seText = hrefNum.getAttribute('href');
// console.log(seText.split('/')[2].split('.')[0]);
// alert(`현재 방문하신 사이트는 ${seText.split('/')[2].split('.')[0]} 입니다.`)

// 입력한 단어와 관련된 사이트로 이동하는 로직
function locationFimc(){
  let thisHref = window.location;
  let inputText = document.getElementById('location').value;
  console.log(inputText);
  thisHref.href = `http://${inputText}.com`;
}
