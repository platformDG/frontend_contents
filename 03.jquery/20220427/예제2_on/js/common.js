$(function(){
  //script 영역 on 예
  // $("a").click(function(){
  //   $("a").removeClass("on"); //기존 추가된 클래스를 초기화(삭제)
  //   $(this).addClass("on");
  //   $("img").attr("src",$(this).attr("href"));
  //   return false;
  // });

  /*
    ul요소에 추가 또는 변화되는 속성, 태그 등
    document load 이후(DOM이 형성 이후)의 변화를 체크하여
    스크립트에 적용할 수 있다.
  */
  $("ul").on("click","a",function(){
      $("a").removeClass("on"); //기존 추가된 클래스를 초기화(삭제)
      $(this).addClass("on");
      $("img").attr("src",$(this).attr("href"));
      return false;
  });

  $("button").click(function(){
    /*
      ul태그 내부에 자식요소의 첫번째 위치에
      <li><a href="./img/img04.jpg">바다</a></li>
    */
    $("ul").prepend("<li class='txt'><a href='./img/img04.jpg'>바다</a></li>");
  });
});
