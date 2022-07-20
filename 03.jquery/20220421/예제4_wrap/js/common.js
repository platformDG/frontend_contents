$(function(){
  //script 영역 wrap(), wrapAll(), wrapInner() 사용 예
  // $("strong").wrap("<h2></h2>"); // 선택한 요소를 개별로 감싼다.
  // $("h2").wrapAll("<header></header>"); //선택한요소들을 모아 전체를 감싼다.

  /*
  menu 클래스 태그의 자식 요소 span을 선택하고 개별요소를
  " <a href="http://naver.com" target=''></a>"로 감싸시오
  */
  // $(".menu span").wrap("<a href='http://naver.com' target='_blink'></a>");
  // $("span").wrapAll("<header></header>");
  /*
     wrapAll 주의사항 : 선택한 모든 요소를 가지고 와서 감싸는 메소드이며
     웹페이지 전체에 영향을 중 수 있으므로 선택 시 구조를  명확히 하는 것이 필요.
  */

  // wrapAll()
  /*
    1. wrap-all의 요소에 있는 p태그들를 item-wrap 클래스를
       갖고 있는 div 태그로 wrapAll 메서드를 사용하여 감싸시오.
    2. wrap-all의 요소에 있는 span태그들를 span-wrap 클래스를
       갖고 있는 div 태그로 wrapAll 메서드를 사용하여 감싸시오.
    3. wrap-all의 요소에 있는 .items태그들를 div-items-wrap 클래스를
       갖고 있는 div 태그로 wrapAll 메서드를 사용하여 감싸시오.
    4. strong 태그들을 .title 클래스를 갖고 있는 div 태그로
       wrap-all 메서드를 사용하여 감싸시오.
  */

  // /*1*/$(".wrap-all p").wrapAll("<div class='item-wrap'></div>");
  // /*2*/$(".wrap-all span").wrapAll("<div class='span-wrap'></div>");
  // /*3*/$(".wrap-all .items").wrapAll("<div class='iv-items-wrap'></div>");
  // /*4*/$("strong").wrapAll("<div class='title'></div>");

  // wrapInner()
  // wrapInner method 사용 시 선택한 요소의 자식 요소 모두를 특정 태그로 감싼다.
  // $(".wrap-inner").wrapInner("<div class='inner'></div>");

  /*
  .items의 자식요소들을 wrapInner를 사용하여
  " <a href='http:/daum.net' target='_blink'></a>"로 감싸시오
  */
  $(".wrap-inner .items").wrapInner("<a href='http://daum.net' target='_blink'></a>");
});
