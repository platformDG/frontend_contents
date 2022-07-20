'use strict'
$(function(){
  let windowWidth = $(window).innerWidth();
  let direc = 0; //방향 전환을 위한 변수 정의
  let wheelAction = false;
  const sectionPage = $(".wheel-wrap section").length;
  console.log(windowWidth*2);
  wheelmove();
  $(window).on('wheel',function(event){
    console.log(event.originalEvent.wheelDelta);
    let eventDelta = event.originalEvent.wheelDelta;
    if( eventDelta > 0 && wheelAction == false ){
      console.log("wheel up!");
      if(direc <= 0){
          direc = 0;
      }else{
        direc--;
        wheelmove();
      }
    }
    else if(eventDelta < 0 && wheelAction == false ){
      console.log("wheel down!");
      if(direc >= sectionPage - 1){
          direc = sectionPage - 1;
      }else{
        direc++;
        wheelmove();
      }
    }
  }); //  $(window).on('wheel',function(event)
  function wheelmove(){
    $("html").animate({scrollLeft:windowWidth * direc},{
      duration:1000,
      start:function(){
        wheelAction = true;
      },
      complete : function(){
        wheelAction = false;
      }
    });
  }
});
