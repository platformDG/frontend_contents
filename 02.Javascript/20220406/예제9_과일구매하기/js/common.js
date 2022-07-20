'use strict'; //엄격모드
const haveMoney = 10000;
let fruitX = prompt('사과의 가격을 입력하세요');
let fruitY = prompt('배의 값을 입력하세요');
let sum;
//입력값 형변환
fruitX = Number(fruitX);
fruitY = Number(fruitY);

//입력값 확인 log
console.log(typeof(fruitX));
console.log(typeof(fruitY));

sum = fruitX + fruitY;
console.log(typeof(sum));
// 입력값 확인 안내
if (typeof(fruitX) == 'number' && typeof(fruitY) == 'number'){
  alert(`사과의 가격은 ${fruitX}원이고, 배의 가격은 ${fruitY}원 입니다. 총지불금액은 ${sum}입니다.`);
}
else{
  alert('입력값을 확인해주시기 바랍니다');
}

//입력값 비교부분
if (sum == haveMoney){
  alert('좀더 싸게는 안되나요? ㅠㅠ');
}
else if (sum <= haveMoney){
  alert('가격이 저렴하네요. 포장해주세요.');
}
else if (sum >= haveMoney){
  alert('가격이 비쌉니다. 네고 가능하신가요 ?');
  if(confirm('네고해주실껀가요 ?')) {
    let fruitX = prompt('사과의 가격을 입력하세요');
    let fruitY = prompt('배의 값을 입력하세요');
    let sum;
    //입력값 형변환
    fruitX = Number(fruitX);
    fruitY = Number(fruitY);

    //입력값 확인 log
    console.log(typeof(fruitX));
    console.log(typeof(fruitY));

    sum = fruitX + fruitY;
    console.log(typeof(sum));
    // 입력값 확인 안내
    if (typeof(fruitX) == 'number' && typeof(fruitY) == 'number'){
      alert(`사과의 가격은 ${fruitX}원이고, 배의 가격은 ${fruitY}원 입니다. 총지불금액은 ${sum}입니다.`);
    }
    else{
      alert('입력값을 확인해주시기 바랍니다');
    }

    //입력값 비교부분
    if (sum == haveMoney){
      alert('좀더 싸게는 안되나요? ㅠㅠ');
    }
    else if (sum <= haveMoney){
      alert('가격이 저렴하네요. 포장해주세요.');
    }
    else if (sum >= haveMoney){
      alert('가격이 비쌉니다. 네고 가능하신가요 ?');
    }
  }
}
