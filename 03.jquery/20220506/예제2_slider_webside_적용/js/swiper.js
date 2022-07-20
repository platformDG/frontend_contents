var swiper = new Swiper(".slider-wrap", {
  loop: true, //무한반복
  autoplay : { //자동 플레이
    delay: 3000, // 기준 ms 2500ms -> 2.5s
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  },
  on:{
    slideChangeTransitionEnd : function(){
      // console.log(this.activeIndex);
      // let thisActive = this.activeIndex;
      // if (thisActive == 1|| thisActive==4){
      //   document.body.querySelector("#mainbanner").style.backgroundImage = 'url("./img/main_banner/mainbanner_1.png")';
      // }
      // else if(thisActive == 2){
      //   document.body.querySelector("#mainbanner").style.backgroundImage = 'url("./img/main_banner/mainbanner_2.png")';
      // }
      // else{
      //   document.body.querySelector("#mainbanner").style.backgroundImage = 'url("./img/main_banner/mainbanner_3.png")';
      // }
      console.log(this.realIndex);
      let realThisIndex = this.realIndex;
      if (realThisIndex == 0){
        document.body.querySelector("#mainbanner").style.backgroundImage = 'url("./img/main_banner/mainbanner_1.png")';
        let txtNum = document.querySelectorAll('#header .inner li a');
        for(var i = 0; i < txtNum.length; i++){
            txtNum[i].style.color= '#000000';
        }
      }
      else if(realThisIndex == 1){
        document.body.querySelector("#mainbanner").style.backgroundImage = 'url("./img/main_banner/mainbanner_2.png")';
        // document.body.querySelectorAll("#gnb li a").style.color="#ffffff";
        let txtNum = document.querySelectorAll('#header .inner li a');
        for(var i = 0; i < txtNum.length; i++){
            txtNum[i].style.color= '#ffffff';
        }
      }
      else{
        document.body.querySelector("#mainbanner").style.backgroundImage = 'url("./img/main_banner/mainbanner_3.png")';
        let txtNum = document.querySelectorAll('#header .inner li a');
        for(var i = 0; i < txtNum.length; i++){
            txtNum[i].style.color= 'red';
        }
      }
      /*
       실습 :
       index 1,2의 slide가 활성화 될때
       #gnb li a의 텍스트를 #ffffff로 변경하시오
      */
    }
  }
});

var swiperMiddle = new Swiper(".thumb-wrap", {
  // loop: true, //무한반복
  // autoplay : { //자동 플레이
  //   delay: 1000, // 기준 ms 2500ms -> 2.5s
  // },
  pagination: {
    el: '.thum-pagination',
    clickable: true,
  },
  navigation:{
    nextEl:'.thumb-button-next',
    prevEl:'.thumb-button-prev',
  },
});
