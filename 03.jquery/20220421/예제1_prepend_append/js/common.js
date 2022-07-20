$(function(){
  // script 영역 prepend(), append() 사용예
  //prepend() 사용예
  // let elem = $("p#first");
  // elem.prepend("<span>hi!!</span>");
  // //append() 사용예
  // elem.append("<span>append!!</span>");

  /*
    p태그의 총 개수 3개
    각 각의 p 태그의 자식요소의 제일 앞쪽에 '<strong>kind: </strong>'를 추가하시오
    ( for 구문을 사용하여 추가하시오 )
  */
  // let pLeng = $("p").length;
  // for(var i = 0; i < pLeng; i++){
  //   $("p:nth-child("+(i+1)+")").prepend("<strong>kind: </strong>");
  // }

  /*
    p태그의 총 개수 3개
    각 각의 p 태그의 자식요소의 제일 뒷쪽에 '<br><strong>add text</strong>'를 추가하시오
    ( for 구문을 사용하여 추가하시오 )
  */
  // for(var i = 1; i<=$("p").length; i++){
  //   $("p:nth-child("+(i)+")").append("<br><strong>add text</strong>");
  // }
  let array = new Array();
  array.push("<img src='./img/bolt.png' alt='bolt.png'>");
  array.push("<img src='./img/build.png' alt='build.png'>");
  array.push("<img src='./img/paid.png' alt='paid.png'>");
  array.push("<img src='./img/watch.png' alt='watch.png'>");

  // let elem = $("ul li a");
  // for(var i = 0; i<array.length; i++){
  //   $(elem[i]).prepend(array[i]);
  // }

  //위 코드를 eq() 명령어(method)를 사용하여 변경하시오
  let elem = $("ul li").find("a");
  for (var i = 0; i<elem.length; i++){
      elem.eq(i).prepend(array[i]);
  }
});
