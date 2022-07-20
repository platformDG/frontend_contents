'use strict'; //엄격모드
let inputText = prompt('가위 바위 보');
let rText;
let winloss;
let rNum  = Math.floor(Math.random() * 3);
if (rNum == 0){
  rText = '가위';
}
else if (rNum == 1){
  rText = '바위';
}
else {
  rText = '보';
}
if(inputText == "가위"){
  if(rText =="보"){
    winloss = "이 겼 다 !"
  }
  else if(rText =="가위"){
    winloss = "비 겼 다 !"
  }
  else{
    winloss = "졌 다 ㅠㅠ"
  }
}
else if(inputText == "바위"){
  if(rText =="보"){
    winloss = "졌 다 ㅠㅠ"
  }
  else if(rText =="가위"){
    winloss = "이 겼 다!"
  }
  else{
    winloss = "비 겼 다!"
  }
}
else if(inputText == "보"){
  if(rText =="보"){
    winloss = "비 겼 다 !"
  }
  else if(rText =="가위"){
    winloss = "졌 다 ㅠㅠ"
  }
  else{
    winloss = "이 겼 다 !"
  }
}
let list = '';

list += "<p style='font-size=30px'>"+inputText+"</p><br>";
list += "<p style='font-size=30px'>"+rText+"</p><br>";
list += "<p style='font-size=30px'>"+winloss+"</p><br>";
console.log(inputText);
console.log(rText);
console.log(winloss);
document.body.innerHTML = list;
