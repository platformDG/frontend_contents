//html에서 스크립트가 실행될때 html전체가 읽히고 나서 실행시킬수 있도록 함. 나중에 블로그로 다시한번 공부하기
window.onload = function(){
  var heightTot, ageTot, heightAvg, agrAvg, scoreTot, scoreAvg
  var cntLeng = 5;

  var n_1, n_2, n_3, n_4, n_5;
  var h_1, h_2, h_3, h_4, h_5;
  var a_1, a_2, a_3, a_4, a_5;
  var s_1, s_2, s_3, s_4, s_5;

  n_1 = '홍길동';
  n_2 = '박길동';
  n_3 = '김길동';
  n_4 = '이길동';
  n_5 = '최길동';

  h_1 = 175;
  h_2 = 180;
  h_3 = 190;
  h_4 = 185;
  h_5 = 178;

  a_1 = 30;
  a_2 = 18;
  a_3 = 21;
  a_4 = 35;
  a_5 = 38;

  s_1 = 85;
  s_2 = 88;
  s_3 = 90;
  s_4 = 95;
  s_5 = 95;

  // 키 나이 점수 합산
  heightTot = h_1 + h_2 + h_3 + h_4 + h_5;
  ageTot = a_1 + a_2 + a_3 + a_4 + a_5;
  scoreTot = s_1 + s_2 + s_3 + s_4 + s_5;

  // 키 나이 점수 평균
  heightAvg = heightTot / cntLeng;
  agrAvg = ageTot / cntLeng;
  scoreAvg = scoreTot / cntLeng

  // alert('평균 키는 ' + heightAvg + 'cm 입니다.');
  // alert('평균 나이는 ' + agrAvg + '살 입니다.');

  // document에 text 출력
  var list = '';
  list += "<table border=1>";
  list +=   '<tr><td><strong>이름</strong></td><td><strong>나이</strong></td><td><strong>키</strong></td><td><strong>점수</strong></td></tr>';
  list +=   '<tr><td>'+n_1+'</td><td>'+a_1+'</td><td>'+h_1+'</td><td>'+s_1+'</td></tr>';
  list +=   '<tr><td>'+n_2+'</td><td>'+a_2+'</td><td>'+h_2+'</td><td>'+s_2+'</td></tr>';
  list +=   '<tr><td>'+n_3+'</td><td>'+a_3+'</td><td>'+h_3+'</td><td>'+s_3+'</td></tr>';
  list +=   '<tr><td>'+n_4+'</td><td>'+a_4+'</td><td>'+h_4+'</td><td>'+s_4+'</td></tr>';
  list +=   '<tr><td>'+n_5+'</td><td>'+a_5+'</td><td>'+h_5+'</td><td>'+s_5+'</td></tr>';
  list +=   '<tr><td>평균</td><td>'+agrAvg+'</td><td>'+heightAvg+'</td><td>'+scoreAvg+'</td></tr>';
  list += '</table>';

  document.body.innerHTML = list;
}
