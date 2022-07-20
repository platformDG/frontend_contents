$(function(){
  /* script 영역 ajax 사용 예 */
  $("button").click(function(){
      $("button").toggleClass("on");
  });

  let xmlTitle='';
  let xmlLink= '';
  let xmlDescription ='';
  $.ajax({
      url: 'data.xml',
      dataType:'xml',
      success: function(data){
        // 실행구문
        // console.log($(data).find("item"));
        // console.log($("title",data));
        /*
         실습:
         데이터의 item 요소를 개별로 추출하고
         아래와 같이 개별로 dl의 내부 영역에 삽입하시오.
         dt a: xml파일 내부 item의 타이틀
         dt a href : xml파일 내부 item의 link
         dd : xml 파일 내부 item의 description
         <dt><a href ='xml.link'>xml.title</a></dt>
         <dd>xml.description</dd>
        */
        // console.log($("item",data).length);
        // each를 써도 되고 innerHTML이 아닌 this를 활용해서 작성해도 될듯.
        for(var i = 0; i<$("item",data).length; i++){
          xmlTitle = $("item title",data)[i].innerHTML;
          xmlLink = $("item link",data)[i].innerHTML;
          xmlDescription = $("item description",data)[i].innerHTML;

          console.log(xmlTitle);
          console.log(xmlLink);
          console.log(xmlDescription);

          $("dl").append(`<dt><a href ='${xmlLink}'>${xmlTitle}</a></dt><dd>${xmlDescription}</dd>`);
        }
      } //success
    });


  // $("button").click(function(){
  //   $.ajax({
  //      url: 'data.xml',
  //      dataType:'xml',
  //      success: function(data){
  //        // 실행구문
  //        // console.log($(data).find("item"));
  //        // console.log($("title",data));
  //        /*
  //         실습:
  //         데이터의 item 요소를 개별로 추출하고
  //         아래와 같이 개별로 dl의 내부 영역에 삽입하시오.
  //         dt a: xml파일 내부 item의 타이틀
  //         dt a href : xml파일 내부 item의 link
  //         dd : xml 파일 내부 item의 description
  //         <dt><a href ='xml.link'>xml.title</a></dt>
  //         <dd>xml.description</dd>
  //        */
  //        // console.log($("item",data).length);
  //        for(var i = 0; i<$("item",data).length; i++){
  //          xmlTitle = $("item title",data)[i].innerHTML;
  //          xmlLink = $("item link",data)[i].innerHTML;
  //          xmlDescription = $("item description",data)[i].innerHTML;
  //
  //          console.log(xmlTitle);
  //          console.log(xmlLink);
  //          console.log(xmlDescription);
  //
  //          $("dl").before(`<dt><a href ='${xmlLink}'>${xmlTitle}</a></dt><dd>${xmlDescription}</dd>`);
  //        }
  //      } //success
  //    });
  // });
});
