$(function() {
  //script 영역 label change 예
  // input 선택방식1
  // let iunputElem = $("input[type=radio]");
  // console.log(iunputElem);
  // input 선택방식2(축약형)
  // let iunputElem = $(":radio");
  // console.log(iunputElem);
  // $(":radio").change(function(){
  //   let genderNum = $(this).attr("id");
  //   $("input[type=radio] label").css("font-weight",""); //lebel 모든 요소의 font-weight 초기화
  //   $("label[for='"+genderNum+"']").css("font-weight","bold");
  // })
  /*
    취미를 구분하는 checkbox 및 label를 추가하고 (헬스, 그림)
    change method 내부에서 if조건문을 사용하여 type 속성을 구분하고
    checkbox, radio 일때 로직을 구현하시오.
  */
  /*
    1번 : if($("input[type=checkbox]:checked").length > 0){}
    2번 : if($("input[type=checkbox]").prop("checked") == true){}
    3번 : if($("input[type=checkbox]").is(":checked") == true){}
  */
  $(":checkbox, :radio").change(function(){
    if($(this).attr("type") == "radio"){
      let genderNum = $(this).attr("id");
      $("input[type=radio] + label").css("font-weight","");
      $("label[for='"+genderNum+"']").css("font-weight","bold");
    }
    else if ($(this).attr("type") == "checkbox"){
      let hobbyNum = $(this).attr("id");
      if($(this).prop("checked") == true){
          $("label[for='"+hobbyNum+"']").css("font-weight","bold");
      }
      else{
        $("input[type=checkbox] + label").css("font-weight","");
      }
    }


    // $(this).next().find("label").css("font-weight",""); //lebel 모든 요소의 font-weight 초기화
    // $("label[for='"+hobbyNum+"']").css("font-weight","bold");
  })
});
