$(function(){
  /* for문으로 구현한것.
  const showText = 100;
  let moreBtnText = "Show More";
  let lessBtnText = "Show Less";

  for (var i = 0; i <$(".more-text").length; i++){
    let elem = $(".more-text").eq(i);
    let content = elem.html();
    let contentLeng = content.length;
    let lessText = content.substr(0, showText);
    let moreText = content.substr(showText, contentLeng);
    let changeHtml = '';

    if( showText < contentLeng ){
      changeHtml = `${lessText}<span>...</span> <span class='more-content'><span>${moreText}</span><a href='#' class='more-btn active'><span>${moreBtnText}</span></a></span>`;
      elem.html(changeHtml);
    }
  }
  */
  /* each 구문으로 구현 */
  const showText = 100;
  let moreBtnText = "Show More";
  let lessBtnText = "Show Less";
  let elem = $(".more-text");

  elem.each(function(i){
    console.log(i);
    let content = $(this).html();
    let contentLeng = content.length;
    let lessText = content.substr(0, showText);
    let moreText = content.substr(showText, contentLeng);
    let changeHtml = '';

    if( showText < contentLeng ){
      changeHtml = `${lessText}<span>...</span> <span class='more-content'><span>${moreText}</span><a href='#' class='more-btn active'><span>${moreBtnText}</span></a></span>`;
      $(this).html(changeHtml);
    }
    /* "i" 인덱스를 활용하여 값을 넣을수도 있다.
    if( i == 0 ){
      $(this).html('1@'+changeHtml);
    }
    else if( i == 1 ){
      $(this).html('2@'+changeHtml);
    }
    else if( i == 2 ){
      $(this).html('3@'+changeHtml);
    }
    */
  });


  $(".more-btn").click(function(){
    // console.log($(this).hasClass('active'));
    // $(this).toggleClass('active')
    if($(this).hasClass('active') == true){
       $(this).removeClass('active');
       $(this).html(`<span>${lessBtnText}</span>`);
    }
    else{
      $(this).addClass('active');
      $(this).html(`<span>${moreBtnText}</span>`);
    }

    $(this).prev().toggle();
    $(this).parent().prev().toggle();
    return false;
  });
});
