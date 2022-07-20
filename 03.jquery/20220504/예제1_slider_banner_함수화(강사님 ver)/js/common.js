$(function(){
  // script 영역 slide banner  만들기 예제1
  const widthNum = 620;// slide 개별의 너비, carousel-inner의 너비를 계산 수 있다.

  // ul의 개수 가져오기
  let ulLeng = $("#carousel-inner ul.column").length;

  $("#carousel-inner").width(widthNum*ulLeng);

  //슬라이드 포지션 초기화
  initialFunc("prev");

  //슬라이드 포지션 초기화 함수
  function initialFunc(init){
    $("#carousel-inner").css("margin-left", -widthNum);
    if( init === "prev" ){
      $("#carousel-inner ul.column:last").prependTo("#carousel-inner");
    }else if( init == "next" ){
      $("#carousel-inner ul.column:first").appendTo("#carousel-inner");
    }
  }

  function actionBtn(el){ // 버튼 클릭 함수 선언문
    el.click(function(){
      let caroInner = $("#carousel-inner");
      let caInMarginLeft = parseInt(caroInner.css("margin-left"));
      let isAni = caroInner.is(":animated");
      // console.log(isAni);
      if( !isAni ){
        if(el.attr("id") === "carousel-prev"){
          caroInner.animate({ marginLeft: caInMarginLeft + widthNum },"slow","swing",function(){
            initialFunc("prev");
          });
        }else{
          caroInner.animate({ marginLeft: caInMarginLeft - widthNum },"slow","swing",function(){
            initialFunc("next");
          });
        }
      }
    });
  }

  $(".btn").each(function(){
    actionBtn($(this));// 버튼 클릭 함수 실행
  });

  // auto slide
  let timerID = null;
  let auto = function(){
    timerID = setInterval(function(){
      // console.log("slide!!");
      $("#carousel-next").trigger("click");
      //$("#carousel-next").click();
    },3000);
    return timerID;
  }

  auto();

  // $("#carousel-prev,#carousel-next").mouseenter(function(){
  //   clearInterval(timerID);
  // }).mouseleave(function(){
  //   timerID = setInterval(function(){
  //     $("#carousel-next").trigger("click");
  //   },3000);
  // });

  $("#carousel-prev,#carousel-next").on({
    mouseenter:function(){
        clearInterval(timerID);
    },
    mouseleave : function(){
      timerID = setInterval(function(){
        $("#carousel-next").trigger("click");
      },3000);
      return timerID;
    }
  });
});// document ready
