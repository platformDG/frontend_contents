$(function(){
  //script 영역 windows resize 예
  $(".box").each(function(){
     // console.log($(this));
    let transSize = "+"; // 크기변화 전환
    let leftDir = "+";   // x축 방향 전환
    let topDir = "+";    // y축 방향 전환
    let speedNum = 1;
    let thisElem = $(this);

    $(window).resize(function(){
      let thisOffset = thisElem.offset();
      let winWidth = $(window).width();
      let winHeight= $(window).height();
      // console.log(thisOffset.left +"//"+thisOffset.top);
      // size 변화 조건식
      if(thisElem.width() > 200 ){
        transSize ="-";
      }else if(thisElem.width() < 50  ){
        transSize ="+";
      }
      // x축 변화 조건식
      // console.log(thisOffset.left+"//"+winWidth);
      // console.log(`offset left: ${thisOffset.left}, windows with: ${winWidth}, elem with : ${thisElem.width()}`);
      if(thisOffset.left > winWidth - thisElem.width()){
        leftDir ="-";
        thisElem.css("left",winWidth - thisElem.width());
        speedNum = Math.ceil(Math.random()*10);
        if (speedNum > 4){
          speedNum = 3;
        }
      }
      else if(thisOffset.left < 0){
        leftDir ="+";
      }

      // y축 변화 조건식
      if(thisOffset.top > winHeight - thisElem.height()){
        topDir = "-";
        thisElem.css("top",winHeight - thisElem.height());
        speedNum = Math.ceil(Math.random()*10);
        if (speedNum > 4){
          speedNum = 3;
        }
      }
      else if(thisOffset.top < 0){
        topDir = "+";
      }
      // thisElem 최종 적용.
      thisElem.css({
        "width":transSize+"=1px",
        "height":transSize+"=1px",
        "left":leftDir+"="+speedNum+"px",
        "top":topDir+"="+speedNum+"px"
      });
    });
  })
});
