'use strict'
let outPutText = '';

function getText(){
  if(outPutText == ''){
    outPutText += document.getElementById('fname').value;
  }
  else{
    outPutText +='<br>';
    outPutText += document.getElementById('fname').value;
  }
  document.getElementById('textarea').innerHTML = outPutText;
}
let domStyle = document.getElementById('textarea').style
domStyle.backgroundColor = 'rgb(140, 198, 217)';
domStyle.color = 'white';
domStyle.fontSize = '32px';
console.log(domStyle);

document.getElementById('btn').addEventListener('click',getText );
