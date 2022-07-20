$(function(){
  //script 영역 replacewith() 사용 예
  // $("h2").replaceWith("<h2>remove</h2>");
  /*
    p태그를 "<span class='box'>text box</span>"으로 변경하시오.
  */
  $("p").replaceWith("<span class='box'>text box</span>");
  console.log($(".box").text());
  $(".box").remove();
  /*
    1. .items태그를 "<a href='http://naver.com'></a>"로 replacewith()를 사용하여 변경하시오
    2. 변경된 a태그를 remove()을 사용하여 제거하시오.
  */
  $(".items").replaceWith("<a href='http://naver.com'></a>");
  $("a").remove();
});
