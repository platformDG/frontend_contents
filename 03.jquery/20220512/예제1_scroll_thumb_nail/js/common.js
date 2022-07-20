'use strict'
$(function(){
  //script 입력 영역
  $(".wrap").each(function(i){
    let thisWrap = $(this); //현재 .wrap을 가져오기
    let itemsNum = thisWrap.find(".items");
    let itemsLeng = itemsNum.length;
    // console.log(itemsNum);
    itemsNum.mouseenter(function(){
        // mouseenter시 실행구문
        let thisIndex = $(this).index();
        $(this).addClass("on");
        if (thisIndex == 0 ){
          thisWrap.css("margin-left", "0px");
        }else if( thisIndex == itemsLeng - 1){
          thisWrap.css("margin-left", "-100px");
        }else{
          thisWrap.css("margin-left","-50px");
        }
    }).mouseleave(function(){
        // mouseleave시 실행구문
        itemsNum.removeClass("on");
        thisWrap.css("margin-left", "0px");
    });

  });
});
