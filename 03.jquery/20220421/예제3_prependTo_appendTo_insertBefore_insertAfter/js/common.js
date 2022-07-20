$(function(){
  //script 영역 prependTo(), appendTo() 사용 예
  // $("strong").appendTo("P");
  // $(".items:last-child").prependTo("#wrap");
  // $(".items:nth-child(3)").appendTo("#wrap");

  //insertBefore(), insertAfter()
  // $("#wrap").insertBefore("p");
  // items5를 item3 바로 앞으로 이동 시키세요.
  $(".items:nth-child(5)").insertBefore(".items:nth-child(3)");
  //strong 태그를 items3 자리뒤로 이동시키세요.
  $("strong").insertAfter(".items:nth-child(4)");
});
