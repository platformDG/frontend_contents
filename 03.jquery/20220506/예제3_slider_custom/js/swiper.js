var swiper = new Swiper(".slider-wrap", {
  loop: true, //무한반복
  autoplay : { //자동 플레이
    delay: 1000, // 기준 ms 2500ms -> 2.5s
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  }
});
