$(function(){
  //srcipt 영역 text ellipsis 사용 예
  let elem = $(".more-text");
  const showText = 100; // 보여주고 싶은 글자수
  let moreBtnText = "Show More";
  let lessBtnText = "Show Less";
  let content = elem.html();
  let contentLeng = content.length; // 총 글자수
  let lessText = content.substr(0, showText); // 화면이 줄어들때 보여지는 텍스트
  let moreText = content.substr(showText, contentLeng); // 화면이 줄어들때 잘린 텍스트
  let changeHtml = '';

  // console.log(lessText);
  // console.log(moreText);

  if( showText < contentLeng ){
    changeHtml = `${lessText}<span>...</span> <span class='more-content'><span>${moreText}</span><a href='#' class='more-btn active'><span>${moreBtnText}</span></a></span>`;
    elem.html(changeHtml);
  }

  //버튼 실행 영역
  // class 삭제 할 때 el.remvoeClass('on')
  $(".more-btn").click(function(){
    console.log($(this).hasClass('active'));
    // $(this).toggleClass('active')
    if($(this).hasClass('active') == true){
       $(this).removeClass('active');
       $(this).html(`<span>${lessBtnText}</span>`);
    }
    else{
      $(this).addClass('active');
      $(this).html(`<span>${moreBtnText}</span>`);
    }
    /*
    prev(), parent(), toggle() 3개의 method를 사용하여
    toggle 형태로 줄임말 포함된 span,
    잘려진 텍스트를 담는 span를 선택하여 toggle 형태로 구현
    prev() : 선택자의 바로 앞 요소 선택
    next() : 선택자의 바로 뒤 요소 선택
    parent() : 선택자의 부모 요소 선택
    toggle() : display : none
    */
    $(this).prev().toggle();
    $(this).parent().prev().toggle();
    return false;
  });
});
