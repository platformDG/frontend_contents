/*
//평균구하기

var sc_1, sc_2, sc_3, sc_4, sc_5, leng, total, avg;

sc_1 = 85;
sc_2 = 90;
sc_3 = 95;
sc_4 = 100;
sc_5 = 75;
leng = 5;

total = sc_1 + sc_2 + sc_3 + sc_4 + sc_5;
avg = total / leng;
console.log('교과목 평균 점수는 ' + avg + '점 입니다.');
*/

// 나이 키 평균 구하기
var heightTot, ageTot, heightAvg, agrAvg;
var cntLeng = 10;

var h_1, h_2, h_3, h_4, h_5, h_6, h_7, h_8, h_9, h_10;
var a_1, a_2, a_3, a_4, a_5, a_6, a_7, a_8, a_9, a_10;

h_1 = 175;
h_2 = 180;
h_3 = 182;
h_4 = 190;
h_5 = 185;
h_6 = 179;
h_7 = 182;
h_8 = 183;
h_9 = 192;
h_10 = 187;

a_1 = 32;
a_2 = 44;
a_3 = 21;
a_4 = 18;
a_5 = 52;
a_6 = 22;
a_7 = 45;
a_8 = 25;
a_9 = 38;
a_10 = 28;

// 키합산
heightTot = h_1 + h_2 + h_3 + h_4 + h_5 + h_6 + h_7 + h_8 + h_9 + h_10;
// 나이합산
ageTot = a_1 + a_2 + a_3 + a_4 + a_5 + a_6 + a_7 + a_8 + a_9 + a_10;
// 키평균
heightAvg = heightTot / cntLeng;
// 나이평균
agrAvg = ageTot / cntLeng;

alert('평균 키는 ' + heightAvg + 'cm 입니다.');
alert('평균 나이는 ' + agrAvg + '살 입니다.');
