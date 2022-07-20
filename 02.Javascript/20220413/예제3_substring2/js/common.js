'use strict'
//substring 사용
let infoText = "javascript,html,css3,photoshop,xd";
let aHtml = '<h1>My Skill</h1><br>';
let dom = document.getElementsByClassName('demo')[0];
// infoText를 substring으로 단어를 개별 추출하고 해당값을
// 배열에 담아서 aHtml의 변수에 반복구문을 사용하여서 추가
// 한 후 document에 있는 요소 .demo element에 출력해주세요.
let skillArray = new Array();

skillArray.push(infoText.substring(0,10));
skillArray.push(infoText.substring(11,15));
skillArray.push(infoText.substring(16,20));
skillArray.push(infoText.substring(21,30));
skillArray.push(infoText.substring(31,33));

// console.log(skillArray);
aHtml +='<ul>'
for(var i = 0; i<skillArray.length; i++){
  aHtml +="<li>"+skillArray[i]+"</li>"
}
// console.log(aHtml);
aHtml +='</ul>'
dom.innerHTML = aHtml;

// li style
for(var i = 0; i <document.getElementsByTagName('li').length; i++ ){
  document.getElementsByTagName('li')[i].style.listStyle= 'decimal';
}
