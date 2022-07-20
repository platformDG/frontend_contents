$(function(){
  // script 영역 slide banner  만들기 예제1
  const widthNum = 150; //slide li 개별 너비, ul.colum의 너비를 계산할수 있다.
  //li의 갯수
  let liLeng = $("#carousel-inner ul.column li").length;

  // li의 개수로 ul.colunm의 너비를 설정
  $("#carousel-inner ul.column").css("width",widthNum*liLeng);

  /*
    실습:
    슬라이드 포지션 초기화
    1.번:
    ul.column의 마지막 li를 ul.column의 첫번째 자식요소로 이동하시오.
    2.번:
    1번을 수행했다면, ul.column의 초기 슬라이드 위치로 이동하시오.
  */
    $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column");
    $("#carousel-inner").css("margin-left", - widthNum);
/*
   // next button Script
   $("#carousel-next").click(function(){
     let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
     console.log(caInMarginLeft)
     let isAni = $("#carousel-inner").is(":animated");
     if(!isAni){
       $("#carousel-inner").animate({marginLeft: caInMarginLeft - widthNum},"slow","swing",function(){
        $("#carousel-inner").css("margin-left", -widthNum);
        $("#carousel-inner ul.column li:first").appendTo("#carousel-inner ul.column");
       });
     }
   });
   // prev button Script
   $("#carousel-prev").click(function(){
     let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
     console.log(caInMarginLeft)
     let isAni = $("#carousel-inner").is(":animated");
     if(!isAni){
       $("#carousel-inner").animate({marginLeft: caInMarginLeft + widthNum},"slow","swing",function(){
        $("#carousel-inner").css("margin-left", -widthNum);
        $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column");
       });
     }
   });
   */
   function actionBtn(el){
     el.click(function(){
       let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
       let isAni = $("#carousel-inner").is(":animated");
       if(!isAni){
         if(el.attr("id")==="carousel-prev"){
           //console.log("a");
           $("#carousel-inner").animate({marginLeft: caInMarginLeft + widthNum},"slow","swing",function(){
             $("#carousel-inner").css("margin-left", - widthNum);
             $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column");
           });
         }
         else{
           //console.log("b");
           $("#carousel-inner").animate({marginLeft: caInMarginLeft - widthNum},"slow","swing",function(){
             $("#carousel-inner").css("margin-left", - widthNum);
             $("#carousel-inner ul.column li:first").appendTo("#carousel-inner ul.column");
          });
         }
       } //  if(!isAni)
     });
   }//function actionBtn

  $(".btn").each(function(){
    actionBtn($(this));
  });
/*
  실습:
  setInterval 함수를 사용하여 auto slide를 구현하시오
*/

let timerID = null;
let auto = function(){
  timerID = setInterval(function(){
    $("#carousel-next").trigger("click");
  },1000);
  return timerID;
}
auto();

$("#carousel-prev,#carousel-next").on({
  mouseenter:function(){
      clearInterval(timerID);
  },
  mouseleave : function(){
    timerID = setInterval(function(){
      $("#carousel-next").trigger("click");
    },1000);
    return timerID;
  }
});
});// document ready
