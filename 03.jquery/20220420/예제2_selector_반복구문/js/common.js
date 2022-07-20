$(function(){
  /*
  for(var i = 1; i < 5; i++){
    if( i == 1 ){
      console.log(i);
      $("li:nth-child("+i+")").css("color","red");
    }
    else if (i == 2){
      $("li:nth-child("+i+")").css("color","orange");
    }
    else if (i == 3){
      $("li:nth-child("+i+")").css("color","yellow");
    }
    else{
      $("li:nth-child("+i+")").css("color","green");
    }
  }
  // 아래 코드와 같은 결과가 나온다.
  $("li:nth-child(1)").css("color","red");
  $("li:nth-child(2)").css("color","orange");
  $("li:nth-child(3)").css("color","yellow");
  $("li:nth-child(4)").css("color","green");
  */

  //속성 선택자
  // $("[class] a").css("color","red"); //해당 속성을 갖고 있는 모든 요소 선택
  // $("ul li[title != 'fourth'] a").css("color","blue"); // 선택한 특정 태그 및 요소를 제외한 나머지 요소를 선택 ( 부정 유사 클래스와 유사 NOT )
  // $("ul li[title != 'second'] a").css("color","yellow");
  /*
    1. 's'문자로 시작하는 title의 속성을 갖고있는 요소의 a 텍스트 색상을 red로 변경
    2. 'rd'문자로 끝나는 title의 속성을 갖고있는 요소의 a 텍스트 색상을 blue로 변경
    3. 'com'문자로 끝나는 href의 속성을 갖고있는 요소의 텍스트 색상을 yellow로 변경
    4. 'net'문자로 끝나는 href의 속성을 갖고있는 요소의 텍스트 색상을 red로 변경
    5. 'th'문자를 포함한 title 속성을 갖고있는 요소의 텍스트 색상을 green로 변경
  */
   $("ul li[title ^= 's'] a").css("color","red");
   $("ul li[title $= 'rd'] a").css("color","blue");
   $("ul li a[href $= 'com']").css("color","yellow");
   $("ul li a[href $= 'net']").css("color","red");
   $("ul li[title *= 'th'] a").css("color","green");
});
