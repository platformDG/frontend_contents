$(function(){
  // first, first-child / last, last-child 의 비교 예제
  // $("p:first-child").css("color","red"); // p를 자식요소로 갖고 있는 요소의 자식들 중 첫번째 p를 선택
  // $("p:first").css("color","blue"); //document 전체에서 선택한 요소의 첫번째를 선택
  // $("p:last-child").css("color",'green');// p를 자식요소로 갖고 있는 요소의 자식들 중 마지막 p를 선택
  // $("p:last").css("color",'purple'); //document 전체에서 선택한 요소의 마지막번째를 선택

  // even, odd 예제
  // index값이 0부터 시작한다. css의 even과 odd와는 선택이 다르다.
  // $("li:even").css("color","blue");
  // $("li:odd").css("color","blueviolet");

  // eq, gt(greater than), Lt(less than) 예제
  // index 값이 0부터 시작한다.
  // $("li:eq(2)").css("color","blue"); //해당 인덱스와 같은 위치의 요소를 선택
  //$("li:gt(2)").css("color","blue"); //greater than eq 기준으로 index가 큰 요소들을 선택
  //$("li:lt(2)").css("color","red"); //less than eq 기준으로 index가 작은 요소들을 선택

  // heading 태그 선택 예제
  // $(":header").css("color","red");
  // $("h1,h6").css("color","red");

  //contains 문자열로 포함 유무 확인 후 요소 선택
  // $("li:contains('menu1')").css("color","red");
  // $("p:contains('사과')").css("color","red");
  // $("p:contains('i')").css("color","blue");
  // $("p:contains('!')").css("color","purple");
  //
  // let elem = $("li:contains('menu1')");
  // if (elem.length > 0) {
  //   console.log("menu1이 존재합니다.");
  // }

  // has 태그 포함 유무로 요소 선택
  // $("li:has(strong)").css("color","red");

  /*
  1. p태그 갖고 있는 li 텍스트 색상을 blue로 변경
  2. span 태그 갖고 있는 li 텍스트 색상을 orange로 변경
  3. a 태그를 포함한 li와 li 자식요소 a 태그 텍스트 색상 green로 변경
  */
  // $("li:has(p)").css("color","blue");
  // $("li:has(span)").css("color","orange");
  // $("li:has(a)").css("color","green");
  // $("li:has(a), li:has(a) a").css("color","green");

  // $("li:parent").css("border","1px solid red");
  $("li:not(:parent)").css("border","1px solid red");
});
