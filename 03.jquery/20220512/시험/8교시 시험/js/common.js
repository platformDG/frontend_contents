$(function(){
    $("button").click(function(){
        $("button").toggleClass("on");
    });

  let ajaxTitle='';
  let ajaxLink= '';
  let ajaxDes ='';
  $.ajax({
    url:'data.xml',
    dataType:'xml',
    success: function(data){
      for(var i = 0; i<$("item",data).length; i++){
        ajaxTitle = $("item title",data)[i].html();
        ajaxLink = $("item link",data)[i].html();
        ajaxDes = $("item desc",data)[i].html();
        $("dl").append(`<dt><a href ='${ajaxLink}'>${ajaxTitle}</a></dt><dd>${ajaxDes}</dd>`);
      }
    }
  }); // $.ajax
});
