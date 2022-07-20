$(function(){
  //script 영역 attr() 사용예
  // #warp-id class attribute 가지고온다.
  /* javascript ver */
  // let attrNum = document.querySelector("#wrap-id").getAttribute('class');
  // console.log(attrNum);
  /*jquery*/
  let num = $("#wrap-id").attr("class");
  console.log(`jquery get class attribute : ${num}`);
  // .wrap-inner 클래스로 선택하여 id값을 가져오시오
  num = $(".wrap-inner").attr("id");
  console.log(`jquery get id attribute : ${num}`);

  // set getAttribute
  /* javascript ver */
  // document.querySelector('.items').setAttribute('title', 'this is items');
  /* jquery ver */
  // $(".items").attr("title","this is items");
  // $("input").attr("checked",false);
  // $("input").attr("checked",true);

  //add class
  // document.body.classList.add('bg-red');
  $("body").addClass("bg-red");
  $("body").addClass("bg-blue");
  $("body").addClass("bg-yellow");
  $("body").addClass("bg-black");
});
