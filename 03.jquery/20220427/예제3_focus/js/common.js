$(function() {
  // document.querySelector("input").value
  // 입력한 값의 font color를 #cccccc으로 변경하시오
  $("input")
    .val("입력해주세요.")
    .css("color", "#cccccc")
    .one("focus", function(){ //초기 포커스 일때 한번만 실행
      $(this).val("").css("color", "#000000");
    })
    .blur(function() { //focus 아웃일때 의미한다.
      if ($(this).val() == "") {
        $(this).val("입력해주세요.").css("color", "#cccccc")
          .one("focus", function() {
            $(this).val("").css("color", "#000000");
          })
      }
    });
});
