$(function() {
  //script 영역 check value 예
  $("button").click(function(){
    let mailNum = $("input[name=mail]").val();
    let checkNum = $("input[name=check]").val();
    if(mailNum !== checkNum){
      $("em").text("(메일 주소가 동일하지 않습니다.)");
    }
    else{
      $("em").text("(메일 주소가 동일합니다.)");
    }
    // console.log(checkNum);
  });
  $("a").click(function(){
    let mailNum = $("input[name=mail]").val();
    let checkNum = $("input[name=check]").val();
    if(mailNum !== checkNum){
      $("em").text("(메일 주소가 동일하지 않습니다.)");
      return false;
    }
    else{
      $("em").text("(메일 주소가 동일합니다.)");
      return false;
    }
    // return false;
  });
});
