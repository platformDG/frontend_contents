$(function(){
  // script 영역 input value
    let pNum = $("p").html();
  $("button").click(function(){
      let btnNum = $(this);
      if( btnNum.text() == "확인"){
        let inputVal = $("input").val();
        $("p").text(`${inputVal}로 전송이 됩니다. 전송을 원하시면 전송 버튼을 눌러주시기 바랍니다.`);
        btnNum.text("전송");
        /*
        foreach : javascript , each : jquery
        each를 사용해서 버튼의 첫번째 요소의 텍스트를 전송으로 변경
        */
        // $("button").each(function(i){
        //   if(i == 0){
        //     $(this).text("전송");
        //   }
        // });
      }
      else if(btnNum.text() == "reset"){
        if (btnNum.prev().text() != '확인'){
          // 방법1. 직접입력
          // $("p").html("E-mail : <input type='email' name='name'> ");
          // 방법2. 초기 로드시 변수처리 후 초기화
          $("p").html(pNum);
          btnNum.prev().text("확인");
        }
      }
      else if(btnNum.text() == "전송"){
        alert("전송이 완료 되었습니다.");
        // javascript
        window.location.href ="http://naver.com";
        //jquery
        $(Location).attr("href","http://naver.com");
        btnNum.text("확인");
      }
  });
});
