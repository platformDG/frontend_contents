$(function(){
  /* script 영역 ajax 사용 예 */
  $("button").click(function(){
      $("button").toggleClass("on");
  });

  let xmlTitle='';
  let xmlLink= '';
  let xmlDescription ='';
  let xmlRepoter ='';
  let xmlDate ='';
  let xmlCount ='';

  $.ajax({
      url: 'data2.xml',
      dataType:'xml',
      success: function(data){
        console.log(data);
        $("item", data).each(function(){
          xmlTitle = $("title",this).html();
          xmlLink = $("link",this).html();
          xmlDescription = $("description",this).html();
          xmlRepoter = $("reporter",this).html();
          xmlDate = $("date",this).html();
          xmlCount = $("count",this).html();

          $("dl").append(`<dt>1.기사 타이틀 : <a href ='${xmlLink}'>${xmlTitle}</a></dt>`);
          $("dl").append(`<dd>2.기사 업로드 시간 : ${xmlDate}</dd>`);
          $("dl").append(`<dd>3.기자 이름 : ${xmlDate}</dd>`);
          $("dl").append(`<dd>4.조회수 : ${xmlCount}</dd>`);
          $("dl").append(`<dd>5.기사내용 : ${xmlDescription}</dd>`);
        });
      } //success
    });
console.log("b");
});
