$(function(){
  $("body").append("<span class='tooltip'></span>");
  $("img").mousemove(function(e){
    let spanNum = $("span");
    // console.log(e.clientY);
    /*
      1. span 태그 내부에 "현재 x좌표 : ** 현재 y 좌표 **" 를 추가하고
      span 위치를 e.clientX, e.clientY 값을
      사용하여 커서를 따라다니는 로직을 구현하시오.
      2. jquery 요소를 추가하는 method를 사용하여
      tooltip클래스를 갖고 있는 span 태그를 body 추가하시오
    */
    spanNum.html(`현재 X좌표 : ${e.clientX}, 현재 y좌표 : ${e.clientY}`);
    spanNum.css("left",e.clientX + 10).css("top",e.clientY);
  });
});
