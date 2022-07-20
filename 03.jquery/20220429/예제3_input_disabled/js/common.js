$(function() {
  //script 영역 input disabled 예
  $("select").change(function(){
    //console.log($(this)[0][$(this)[0].length-1]); //length를 사용하여 마지막 요소 선택
    // console.log($(this).val());
    /*
    console.log($(":selected").attr("value"));
      실습:
      10대 일때는 input text field를 비활성화 하고
      10대가 아닐때는 input text field를 활성화 하시오.
      removeAttr("") : attribute 삭제
    */
    let ageNum = Number($(this).val().substring(0,2));
    if(ageNum > 10){
      $("input").removeAttr("disabled");
    }
    else{
        $("input").attr("disabled","disabled");
    }
  });
});
