'use strict'
let weather = new Array();
weather.push(32,28,35,27,26,32,38);

function calcFunc(){
  let sumTotal = 0;
  let avgNum = 0;
  for(var i=0; i<weather.length; i++){
    sumTotal += weather[i];
  }
  avgNum = sumTotal/weather.length;
  avgNum = Math.round(avgNum);
return avgNum;
}

let list = "<table>";
list += "<tr><th>NO</th><th>온도</th></tr>";
for(var i = 0; i<weather.length; i++){
  list += "<tr><td>"+(i+1)+"</td><td>"+weather[i]+"</td></tr>";
}
list += "<tr><td>평균</td><td>"+calcFunc()+"</td></tr>"
list += '</table>';

document.body.innerHTML = list;
