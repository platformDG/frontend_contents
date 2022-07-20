$(function(){
  // script 영역 file load paging 예
  let hrefNum = window.location.href; // 주소 값 확인
  console.log(hrefNum);
  /*
  실습:
  window location href 값을 가져오고 slit를 사용하여
  해당페이지를 인식할 수 있는 스트링값으로 현재페이지 동일한
  gnb li 요소에 'on' 클래스를 추가하시오.
  */
  let href1 = hrefNum.split('/');
  let hrefLeng1 = href1.length;
  let href2 = href1[hrefLeng1 - 1].split('.');
  let href = href2[0];
  console.log(href);

  $('header').load('./header.html .inner',function(){
    $('#gnb ul li').each(function(){
      if ( $(this).text() == href ) {
        $(this).addClass('on');
      }
    })
  });
  $('#footer').load('./footer.html .inner');
});
