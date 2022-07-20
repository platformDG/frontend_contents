$(function(){
  $(window).scroll(function(){
    let wHeight = $(window).height();
    let thisScrollTop = $(this).scrollTop();
    $(".slide").each(function(){
      let thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop && thisScrollTop < thisOffset.top + wHeight ){
        let bodyBg = $(this).data("background");
          $("body").css("background-color",bodyBg);
      }
    });
    let navBar = $("nav");
    if( thisScrollTop > wHeight - 70 ){
      navBar.addClass("fixed");
    }else{
      navBar.removeClass("fixed");
    }
  });
});
