$(function(){
  $(window).scroll(function(){
    let winHeight = $(window).height() - 70;
    let scrollHeight = $(this).scrollTop();
    let navBar = $("nav");
    // console.log(winHeight +" // "+scrollHeight);
    if (winHeight <= scrollHeight) {
      navBar.addClass("fixed");
    }
    else{
      navBar.removeClass("fixed");
    }
  });
});
