'use strict'

let array = new Array();
// array.push('사과','배','포도');
// console.log(array);

array = [['사과','배','바나나'],['잡지'],['트럭','승용차','캠핑카']];

for(var i = 0; i<array.length; i++){
  for(var j= 0; j<array[i].length; j++){
    array[i][j]
    }
}
array.forEach(function(i){
  i.forEach(function(j){
      console.log(j);
  });
});
