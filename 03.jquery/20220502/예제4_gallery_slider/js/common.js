$(function(){
  /* script 영역 gallery slider 사용 예 */
  $("#navi a").click(function(){
    let imgSrc = $(this).attr("href");
    let checkAni = $("#maim img:last").is(":animated");
    console.log(checkAni);

    // if(checkAni ){
    //   $("#main img:last").stop().css("opacity",0);
    //   $("#main img:last").remove();
    //   $("#main img").attr("src",imgSrc);
    // }
    // else{
    //   $("#main img").before(`<img src="${imgSrc}">`);
    //   $("#main img:last").animate({opacity:0}, {
    //     duration: 1000,
    //     easing: "swing",
    //     complete: function(){
    //       $(this).remove();
    //     }
    //   });
    // }

    // if (checkAni == false){
    //   $("#main img:last").animate({opacity:0}, {
    //     duration: 1000,
    //     easing: "swing",
    //     start: function(){
    //       $("#main img").before(`<img src="${imgSrc}">`);
    //     },
    //     complete: function(){
    //       $(this).remove();
    //     }
    //   });
    // }

    /*최종본*/
    $("#main img:last").animate({opacity:0}, {
      duration: 1000,
      easing: "swing",
      start: function(){
        $("#main img").before(`<img src="${imgSrc}">`);
      },
      complete: function(){
        $(this).remove();
      }
    });
    return false;
  });

  // prev, next  버튼으로 작동하는 스크립트
//  let marginLeftNum = $("#navi .page-wrap").css("margin-left");
//  console.log(parseInt(marginLeftNum));
//  const marginNumber = 300;
  $("img.next").click(function(){
    // marginLeftNum = $("#navi .page-wrap").css("margin-left");
    // $("#navi .page-wrap").animate({
    //   marginLeft: parseInt(marginLeftNum) - marginNumber ,
    // }, "fast",
    // function(){
    //   console.log($("#navi .page-wrap").css("margin-left"));
    // }
    // );
    btnFunc("next","#navi .page-wrap");
  });

  $("img.prev").click(function(){
    // marginLeftNum = $("#navi .page-wrap").css("margin-left");
    // $("#navi .page-wrap").animate({
    //   marginLeft: parseInt(marginLeftNum) + marginNumber ,
    // }, "fast",
    // function(){
    //   console.log($("#navi .page-wrap").css("margin-left"));
    // }
    // );
    btnFunc("prev","#navi .page-wrap");
  });


  function btnFunc(btn, elem){
    let marginLeftNum = $(elem).css("margin-left");
    const marginNumber = 300;
    let res = 0;
    if (btn =="prev"){
      res = parseInt(marginLeftNum) + marginNumber
      if(res> 0){
        res = 0;
      }
    }
    else{
      res = parseInt(marginLeftNum) - marginNumber
      if(res< -600){
        res = -600;
      }
    }
    console.log(res);
    marginLeftNum = $(elem).css("margin-left");
    $(elem).animate({
      marginLeft: res ,
    }, "fast",
    function(){
      console.log($(elem).css("margin-left"));
    }
    );
  }
});
