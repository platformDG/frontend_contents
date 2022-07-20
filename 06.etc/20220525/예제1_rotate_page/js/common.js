'use strict'
//변수선언
const descArray = [];
descArray[0] = 'Always refreshing to see something you recognise. Cold, fresh, high quality Heineken®. Enjoyed near and far since 1873.'
descArray[1] = 'No alcohol, 100% Heineken®. We are proud of our Heineken® 0.0. Brewed with devotion and our heritage knowledge of beer.'
descArray[2] = 'Not just any light beer. An award-winning light beer.'
descArray[3] = 'On the beach, at a party or on the go? Feel and enjoy wherever you are a true touch of class with a cold can of Heineken®, the refreshing taste that is kept safe from light and air.'
let selectElem = document.querySelectorAll("#pagenation ul li");
let textElem = document.querySelector('.text h2');
let descElem = document.querySelector('.text .desc');
let imgElem = document.querySelector('.change-img img');
let rotateElem = document.querySelector('.rotate-items ul');

selectElem.forEach((item, i) => {
  item.addEventListener('click', function(){
    for(var j = 0; j<selectElem.length; j++){
      selectElem[j].removeAttribute("class","active");
    }
    item.setAttribute("class","active");
    let childSrc = item.childNodes[0].getAttribute('src'); //선택한 이미지 의 주소를 가져옴
    imgElem.setAttribute("src",childSrc);
    textElem.innerHTML =item.childNodes[0].getAttribute('title');
    descElem.innerHTML = descArray[i];

    let deg = (i) * 90;
    rotateElem.style.transform =`rotate(${deg}deg)`;
  });
});
