//체크박스 전체선택 함수
function allCheckFunc(btn, elem){
  if($(btn).hasClass("all")){
    $(btn).toggleClass("all");
    elem.prop("checked", false);
    $(btn).text("전체선택");
  }
  else{
    $(btn).toggleClass("all");
    elem.prop("checked", true);
    $(btn).text("전체해제");
  }
}
