// 파일 미리보기 함수
function readURL(input) {
  if ( input.files && input.files[0] ) {
    let reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload = function(e){
      console.log(e.target.result);
      $('#image-section').attr('src', e.target.result);
    }
  }
}
