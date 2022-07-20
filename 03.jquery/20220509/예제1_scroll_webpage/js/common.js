'use strict'
$(function(){
  //script 입력 영역
  const intervalNum = 150;

  $("nav ul li a, back-to-top a, a.button, #footer ul li a").click(function(){
    // console.log(this.hash);
    // console.log($(this.hash).offset().top);
    let thisHash = $(this.hash);

    /* 방법1 애니메이션 작동 될때 여러번 클릭을 방지 */
    let isAni = $("html,body").is(":animated");
    if( !isAni ){
      $("html,body").animate({scrollTop : thisHash.offset().top},1500);
    }
    /* 방법2 : 즉시 scroll 대상변경
    $("html,body").stop();
    $("html,body").animate({scrollTop : thisHash.offset().top},1500);
    */
    /*
     실습 2:
     back-to-top요소 (scroll 상단이동버튼)가 window scroll top 값이 0이 아닐때
     on class를 추가하여 노출 시키시오. (window scroll top 값이 0일때는 on class 삭제)
    */
    return false;
  });

  $(window).scroll(function(){
    let scrollHeight = $(this).scrollTop();
    if (scrollHeight > 0){
      $(".back-to-top").addClass("on");
    }
    else{
      $(".back-to-top").removeClass("on");
    }
  });

  /*
    실습 3:
    section offset method를 사용해서 window가 스크롤될때
    해당 section의 offset top과 window scrollTop이 같고
    section의 높이와 동일한 영역 안일때 해당 section에
    active class를 추가하시오.
  */
  let winHeight = $(window).height();
  $(window).scroll(function(){
    // console.log($(window).height()+" // "+ $(this).scrollTop())
    let scrollHeight = $(this).scrollTop();
    $("section").each(function(){
        let thisOffset = $(this).offset();
         if(thisOffset.top <= scrollHeight + intervalNum && scrollHeight < (thisOffset.top + winHeight)){
           $(this).addClass("active");
         }
    });
  });
});
