$(function(){
  //script 영역 scroll 반응형 페이지 사용 예
  /*
   실습 1:
   scroll method를 사용하여
   scrolltop의 값이 첫번째 slide 높이값( window 높이값 )
   보다 클때 nav 태그에  fixed클래스를 추가하시
  */
  $(window).scroll(function(){
    // console.log($(window).height()+" // "+ $(this).scrollTop())
    let winHeight = $(window).height();
    let scrollHeight = $(this).scrollTop();
    $(".slide").each(function(){
        let thisOffset = $(this).offset();
          // console.log(i+"//"+thisOffset.top);
         /*
         슬라이드 구간을 if구문으로 체크하고 각 구간마다
         h2의 텍스트를 log에 출력하시오.
         */
         if(thisOffset.top <= scrollHeight && scrollHeight < (thisOffset.top + winHeight)){
           /*
           body 요소에 background-color 값을
           $(this) .slide 요소의 data-background 값으로 변경하시오
           */
           $("body").css({
             "background":$(this).data("background"),
             "transition": "1s"
           });
           $(this).addClass("on");
         }
    });

    let navBar = $("nav");
    if ((winHeight - 70) <= scrollHeight) {
      navBar.addClass("fixed");
    }
    else{
      navBar.removeClass("fixed");
    }
  });
});
