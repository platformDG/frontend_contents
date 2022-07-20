$(function(){
  // script 영역 아코디언
  // $("dd:not(:first)").css("display","none");
  // $("dl dt").click(function(){
  //   if($("+dd",this).css("display") == "none"){
  //     $("dd").slideUp("slow");
  //     $("+dd",this).slideDown("slow");
  //   }
  // });
  /*
    실습 :
    dt click event를 animate method를 사용하여 구현하시오.
  */
// 동근실습
/*
$("dd:not(:first)").css("display","none");
  $("dl dt").click(function(){
    if($("+dd",this).css("display") == "none"){
      $("dd").each(function(){
        if($(this).css("display") != "none"){
          $(this).animate({height: 'toggle'},'slow','swing',function(){
            $(this).css("display","none");
          });
        }
      });
      $("+dd",this).animate({height: 'toggle'},'slow','swing',function(){
          $(this).css("display","block");
      });
    }
  });
*/

  /* 강사님 버전 */
  $("dd:not(:first)").css({
    "display" : "none",
    "height" : 0
  });

  $("dl dt").click(function(){
    let thisElem = $(this);
    console.log(thisElem);
    if($("+dd",thisElem).css("display") == "none"){
      $("dd").each(function(){
        if($(this).css("display") != "none"){
          $(this).animate({height:0},"slow","swing",function(){
            $(this).css("display","none")
          });
        }
      });
      $("+dd",thisElem).css("display","block").animate({height:300},"slow");
    }
  });

});// document ready
