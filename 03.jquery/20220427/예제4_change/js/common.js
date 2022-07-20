$(function() {
  // script 영역 change 예
  /*
    prev(), next(), find() method를 활용하여 변경된
    select값을 input값에 입력하시오
  */
  // Atype
  // $("select").change(function(){
  //   let thisVal = $(this).val();
  //   // console.log($(this).next().find("input").val());
  //   $(this).next().find("input").val(thisVal);
  // });

  // $("input.inputtest").change(function(){
  //   alert(`input text가 ${$(this).val()}로 변경 되었습니다.`);
  // });

  // Btype
  // $("select").change(function(){
  //   let thisVal = $(this).val();
  //   // window.location.href = thisVal;
  //   $(location).attr("href", thisVal);
  // });

  /*
    Atype 과 Btype을 change method 내부에서 if구문 사용하여 구현하시오
  */
  $("select").change(function(){
    let thisVal = $(this).val();
    if ($(this).hasClass("family-site") == true){
      $(location).attr("href", thisVal);
    }
    else {
      $(this).next().find("input").val(thisVal);
    }
  });
});
