$(function(){
  // script 영역 file load2 예
  $('#content').load('./load_file.html .section1') // 초기화면 로드
  // $('ul li').click(function(){
  //   // console.log($(this).index()); // 인덱스 번호로 자신이 몇 번째인지 확인 할 수 있다.
  //   // console.log($(this).attr('id'));
  //   let thisId = $(this).attr('id');
  //   if ( thisId == 'section1' ) {
  //     $('#content').load('./load_file.html .section1');
  //   } else if ( thisId == 'section2' ) {
  //     $('#content').load('./load_file.html .section2');
  //   } else if ( thisId == 'section3' ) {
  //     $('#content').load('./load_file.html .section3');
  //   };
  // });

  /*
  실습:
  위 코드를 리팩토링하여 코드를 재작성하시오.
  */
  $('ul li').click(function(){
    let thisIdNum = $(this).index() + 1;
    $('#content').load(`./load_file.html .section${thisIdNum}`);
  });
});
