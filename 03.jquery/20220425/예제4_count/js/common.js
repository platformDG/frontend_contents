$(function(){
  // script 영역 animate 실행
  let boxNum = $(".flex-box .count");
  boxNum.each(function(){
    console.log($(this));
    $(this).prop('Counter', 0).animate({Counter:$(this).text()},{
      duration: 4000,
      easing:"swing",
      step: function(now){
        // console.log(now);
        // console.log(Math.ceil(now));
        $(this).text(Math.ceil(now));
      },
      complete: function(){
        console.log("완료");
        $("body").css("background","#279f40");
      }
    });
  });

  // boxNum.animate({left:'100px'},4000,'swing',function(){
  //   alert("animation이 종료 되었습니다.");
  // });
});
