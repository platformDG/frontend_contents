window.onload = function(){
  //변수선언 및 값 초기화
  var heightTot, ageTot, heightAvg, agrAvg, scoreTot, scoreAvg;
  var arrHeight = new Array();
  var arrName = new Array();
  var arrAge = new Array();
  var arrScore = new Array();
  arrHeight.push(175, 180, 190, 185, 178);
  arrName.push('홍길동', '박길동', '김길동', '이길동', '최길동');
  arrAge.push(30, 18, 21, 35, 38);
  arrScore.push(85, 88, 90, 95, 95);

  heightTot = sumTotal(arrHeight);
  ageTot = sumTotal(arrAge);
  scoreTot = sumTotal(arrScore);

  heightAvg = calcAvg(heightTot, arrHeight.length);
  agrAvg = calcAvg(ageTot, arrAge.length);
  scoreAvg = calcAvg(scoreTot, arrScore.length);

  function sumTotal(arr){
    var sumt = 0;
    for(var i = 0; i < arr.length; i++){
      sumt += arr[i];
    }
    return sumt;
  }

  function calcAvg(sumTotal, leng){
    var ravg = 0;
    ravg = sumTotal / leng;
    return ravg;
  }


  // 키 나이 점수 평균
  heightAvg = heightTot / arrHeight.length;
  agrAvg = ageTot / arrAge.length;
  scoreAvg = scoreTot / arrScore.length

  // document에 text 출력
  var list = '';
  list += "<table border=1>";
  list +=   '<tr><td><strong>이름</strong></td><td><strong>나이</strong></td><td><strong>키</strong></td><td><strong>점수</strong></td></tr>';
  for(var i = 0; i<5; i++){
      list +=   '<tr><td>'+arrName[i]+'</td><td>'+arrAge[i]+'</td><td>'+arrHeight[i]+'</td><td>'+arrScore[i]+'</td></tr>';
  }
  list +=   '<tr><td>평균</td><td>'+agrAvg+'</td><td>'+heightAvg+'</td><td>'+scoreAvg+'</td></tr>';
  list += '</table>';

  document.body.innerHTML = list;
}
