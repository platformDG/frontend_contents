$(function(){
  //script 영역 one 예
  /*
  $("a").click(function(){
    $("a").removeClass("on"); //기존 추가된 클래스를 초기화(삭제)
    $(this).addClass("on");
    $("img").attr("src",$(this).attr("href"))
    return false;
  });
  */
  //클릭 한번만 된다.
  $("a").one('click',function(){
    $("a").removeClass("on"); //기존 추가된 클래스를 초기화(삭제)
    $(this).addClass("on");
    $("img").attr("src",$(this).attr("href"))
    return false;
  });
 // $(".txt").
});
