$(function(){
  //script 영역 slide banner 만들기
  //예제1
  const widthNum = 620; //slide 개별의 너비, carousel-inner의 너비를 계산할 수 있다.

  // ul의 개수 가져오기
   let ulLeng = $("#carousel-inner ul.column").length;
  console.log(ulLeng);

  $("#carousel-inner").css("width",widthNum*ulLeng);

  //슬라이드 포지션 초기화
  $("#carousel-inner ul.column:last").prependTo("#carousel-inner");
  $("#carousel-inner").css("margin-left",-widthNum);

  // 함수화
  $(".btn").each(function(){
    btnFunc($(this));
  });

  function btnFunc(el){
    el.click(function(){
      let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
      let checkAni = $("#carousel-inner").is(":animated");

      if(checkAni == false){
        if(el.hasClass("next")){
          $("#carousel-inner").animate({ marginLeft: caInMarginLeft - widthNum },"slow","swing",function(){
            // animation 실행이 끝난 직후 영역
            $("#carousel-inner ul.column:first").appendTo("#carousel-inner");
            $("#carousel-inner").css("margin-left",-widthNum);
          });
        }
        else {
          $("#carousel-inner").animate({ marginLeft: caInMarginLeft + widthNum },"slow","swing",function(){
            // animation 실행이 끝난 직후 영역
            $("#carousel-inner ul.column:last").prependTo("#carousel-inner");
            $("#carousel-inner").css("margin-left",-widthNum);
          });
        }
      }
    });
  }

  //auto slide
  let aa = null;
  aa = setInterval(function(){
    console.log("aa");
     $("#carousel-next").trigger("click");
    // $("#carousel-next").click();
  }, 1000);

  // $("#carousel-prev, #carousel-next").mouseenter(function(){
  //   clearInterval(timerID);
  // }).mouseleave(function(){
  //   timerID = setInterval(function(){
  //     $("#carousel-next").trigger("click");
  //   }, 1000);
  // });
});
