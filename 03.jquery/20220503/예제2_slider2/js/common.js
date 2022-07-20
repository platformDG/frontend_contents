$(function(){
  /* script 영역 gallery slider 사용 예 */
  $("#navi a").click(function(){
    let imgSrc = $(this).attr("href");
    // let checkAni = $("#maim img:last").is(":animated");
    // console.log(checkAni);
    $("#main img:last").animate({opacity:0}, {
      duration: 400,
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
/*
  $("img.next").click(function(){
    btnFunc("next","#navi .page-wrap");
  });

  $("img.prev").click(function(){
    btnFunc("prev","#navi .page-wrap");
  });


  function btnFunc(btn, elem){
    let marginLeftNum = $(elem).css("margin-left");
    const marginNumber = 600;
    let res = 0;

    if (btn =="prev"){
      res = parseInt(marginLeftNum) + marginNumber
      if(res> 0){
        res = 0;
        alert("첫페이지 입니다.");
      }
    }
    else{
      res = parseInt(marginLeftNum) - marginNumber
      if(res< -600){
        res = -600;
        alert("마지막 페이지 입니다.");
      }
    }
    marginLeftNum = $(elem).css("margin-left");
    $(elem).animate({
      marginLeft: res ,
    }, "fast",
    function(){
      console.log($(elem).css("margin-left"));
    }
    );
  }
*/
$(".btn").each(function(){
    pagingBtnFunc($(this));
});

  const marginNumber = 600;
  const pwElem = $("#navi .page-wrap");
  const pageLeng = $("#navi .page-wrap .page").length;
  $(pwElem).width(marginNumber*(pageLeng));
  function pagingBtnFunc(el){
    el.click(function(){
      let marginLeftNum = parseInt(pwElem.css("margin-left"));
      let isAni = pwElem.is(":animated");
      if (isAni == false ){
        if($(el).hasClass("next") && marginLeftNum > -(marginNumber * (pageLeng-1)) ){
          pwElem.animate({marginLeft: marginLeftNum - marginNumber},"fast");
        }else if($(el).hasClass("prev") && marginLeftNum < 0 ){
          pwElem.animate({marginLeft: marginLeftNum + marginNumber},"fast");
        }else if( marginLeftNum == -(marginNumber * (pageLeng-1)) || marginLeftNum == 0){
          alert("더 이상 이미지가 없습니다.")
        }
      }
    });
  }

});
