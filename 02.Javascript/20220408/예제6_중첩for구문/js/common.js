'use strict'; //엄격모드
//중첩 for 구문
// 다중 배열 or 다차원 배열
// let array = [['가','나','다'],'b',['제주도','강원도','포항']];
// console.log(array[2][0]);

// for(let i = 0; i<10; i++){
//   //실행문
//   console.log(i);
//   for(let j = 0; j<5; j++){
//     console.log(`중첩for ${j}`);
//   }
// }
let itemList = "['반바지','슬렉스']\n['점퍼','조끼']\n['슬립온','워커','스니커즈']\n['크로스백','백팩','클러치백']";
let intputText = prompt(`첫번째 구매하고싶은 물건을 선택하세요.\n ${itemList}`);
let intputText2 = prompt(`두번째 구매하고싶은 물건을 선택하세요.\n ${itemList}`);
let intputText3 = prompt(`세번쨰 구매하고싶은 물건을 선택하세요.\n ${itemList}`);
let shoppingItems = [['반바지','슬렉스'],['점퍼','조끼'],['슬립온','워커','스니커즈'],['크로스백','백팩','클러치백']];

// 중첩for구문을 활용하여 반바지, 스니커즈, 백팩을 출력하시오

for(var i =0; i < shoppingItems.length; i++ ){
  for(var j =0; j <shoppingItems[i].length; j++ ){
    if(shoppingItems[i][j] == intputText){
      console.log(`${shoppingItems[i][j]}, i =${i} , j =${j}`);
    }
    else if(shoppingItems[i][j] == intputText2){
      console.log(`${shoppingItems[i][j]}, i =${i} , j =${j}`);
    }
    else if(shoppingItems[i][j] == intputText3){
      console.log(`${shoppingItems[i][j]}, i =${i} , j =${j}`);
    }
  }
}
