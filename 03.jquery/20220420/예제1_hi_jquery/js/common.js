$(function(){
  //jquery 실행구문 CSS 셀렉터
  // document.querySelector("#first").style.color = 'blue';
  // $("li").css("color","blue");
  // $("#first").css("color","yellow");
  // $("li.fourth").css("background-color","yellow");
  /*
    세번째 li의 span 요소에 배경색을 blue로 변경.
    두번째 li의 p 요소의 글자크기를 10px으로 변경.
  */
  /*
    $("li.third span").css("background-color", "blue");
    $("li.second p").css("font-size", "10px");
  */
  /*
    let num = 30;
    $(".first, .third, .fourth").css("left", `${num}px`);
    $(".first, .third, .fourth").css("left", num+"px");
    $(".first, .third, .fourth").css("left", num);
  */
  /* ul의 첫번째 li의 자식 요소 span에 텍스트 색상을 red로 변경하시오 */
  /*
    $("li.first > span").css("color","red"); // 하위 자식 요소 선택
  */
  // $("*").css("color","blue"); //전체 요소 선택
  /* ul의 세번째 li요소를 인접 선택자 사용하여 텍스트 색상을 blue로 변경하세요*/
  /*
    $("ul li.second + li").css("color","blue"); //인접 선택자를 사용한 요소 선
    $("li:first-child").css("color","green");
    $("li:last-child").css("color","green").css("font-size","10px");//css 다중사용 ( method chain )
  */
  // $("li.second ~li").css("color","yellow"); // 동위 선택자를 사용한 요소 선택
  // $("li:not(.first)").css("color","red"); //부정 유사 클래스를 사용한 요소 선택

  /* 메뉴구조 요소를 선택하고 style을 적 */
  // $("span").css("color","red");
  /* 서브메뉴 내부요소 span의 텍스트 색상을 blue로 변경 */
  $(".submenu span").css("color","blue");
  $(".submenu li span:empty").css("background","red");
});
