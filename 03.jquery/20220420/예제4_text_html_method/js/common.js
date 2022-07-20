$(function(){
  // jquery 실행구문
  // script 영역 text() 사용 예
  // let textNum = '';
  // textNum  = $("p#first");
  // textNum.text('hi!! jquery!!');
  // console.log(textNum);

  // 특정 요소의 텍스트를 다른 요소에 삽입하는 예
  // 방법1
  // console.log($("p#second").text());
  // $("p#first").text($("p#second").text());
  // 방법2
  // a type
  // let elem = $("p#first");
  // let elemInputText = $("p#second").text();
  // elem.text(elemInputText);

  // b type
  // let elem = $("p#first");
  // let elemInput = $("p#second");
  // elem.text(elemInput.text());

  // let numHtml = '';
  // numHtml = $("p#second").html();
  // numHtml = document.querySelector("p#second").innerHTML; //javascript ver
  // console.log(numHtml);

  // #third의 자식 요소 h2의 텍스트를 가져와서 p#first에 추가하세요.
  // let numHtml = '';
  //jquery 버전으로 넣기
  // numHtml = $("#third h2").html();
  // console.log(numHtml);
  // $("p#first").html(numHtml);

  //javascript 버전으로 넣기
  // numHtml = document.querySelector("#third h2").innerHTML;
  // document.querySelector("p#first").innerHTML = numHtml;
});
