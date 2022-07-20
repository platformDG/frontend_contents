$(function(){
  //script 영역 event() 사용 예
  //button으로 event() 실행
  // document.querySelector("button").addEventListener("click", function(){});

  // console.log($("img").attr("title"));
/*
아래 코드를 사용하여
이미지를 toggle 형태로 구현하고
첫번째 이미지에 alt 값 : 산이미지 1
두번째 이미지에 alt 값 : 산이미지 2
*/
  $("button").click(function(){
    if($("img").attr("title") == "mountain_01"){
      // $("img").attr("title","mountain_02").attr("alt","산이미지02")
      // .attr("src","./img/mountain_02.png");
      $("img").attr({
        "title":"mountain_02",
        "alt":"산이미지02",
        "src":"./img/mountain_02.png",
      });
    }
    else{
      // $("img").attr("title","mountain_01").attr("alt","산이미지01")
      // .attr("src","./img/mountain_01.png");
      $("img").attr({
        "title":"mountain_01",
        "alt":"산이미지01",
        "src":"./img/mountain_01.png",
      });
    }
  }); //  $("button").click
/*
a태그 click event 사용 시 함수 내 return false 사용,
하위브라우저 혹은 특정 브라우저에서 a link 기본 속성이
먼저 실행하여 event가 작동하지 않는 경우가 있다.
*/

  $("a").click(function(){
    if($("img").attr("title") == "mountain_01"){
      $("img").attr({
        "title":"mountain_02",
        "alt":"산이미지02",
        "src":"./img/mountain_02.png",
      });
    }
    else{
      $("img").attr({
        "title":"mountain_01",
        "alt":"산이미지01",
        "src":"./img/mountain_01.png",
      });
    }
    // e.preventDefault();
    // return false;
  }); //  $("a").click
});
