var swiper = new Swiper(".slider-container", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  }
});

var mySwiper = new Swiper(".my-container",{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  }
});
