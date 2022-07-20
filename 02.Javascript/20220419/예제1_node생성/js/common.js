'use strict'
window.onload = function(){
  init(); // window가 로드된 이후 초기화 코드

}
// function init(){
//   let btn = document.createElement('div'); //div요소 생성
//   btn.id = 'btn'; //div요소에 id부여
//   btn.removeAttribute('id'); //id값 삭제
//   let text = document.createTextNode('test'); // text 생성
//   btn.append(text); //div에 test글자 추가
//   let contain = document.createElement('div');
//   //contain 요소에 wrap class 추가
//   contain.className='wrap';
//   // contain.classList.add('wrap');
//   contain.append(btn);
//   console.log(contain);
//   console.log(btn);
//   let divBox = document.createElement('div');
//   divBox.prepend(document.createTextNode('div-Box'));
//   document.body.append(contain); //body안에 추가
//   document.body.append(divBox);
// }

function init(){
  //변수선언
  let contain;
  //div wrap
  contain = document.createElement('div');
  contain.className= 'wrap';
  document.body.append(contain);

  //여성
  contain.append(createLabel('gender', '여성','fmale'));
  contain.append(createInput('checkbox', 'female'));

  //남성
  contain.append(createLabel('gender', '남성','male'));
  contain.append(createInput('checkbox', 'male'));

  console.log(contain);

  //공통부분 함수로 만들기
  function createInput(type, id){
    let ci = document.createElement('input');
    ci.type = type; //'checkbox';
    ci.id = id; //'female';
    return ci;
  }
  function createLabel(id, text, forT){
    let cl = document.createElement('label');
    cl.id = id;
    cl.append(document.createTextNode(text));
    cl.setAttribute('for',forT);
    return cl;
  }
}
