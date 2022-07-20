'use strict'

function outFunc(x) {
  const y = 5;
  function innerFunc(z){
    return x + y + z;
  }
  return innerFunc;
}

// let makeAdder10 = new outFunc(10); //생성자로 인스턴스 생성
// console.log(makeAdder10(2));

let closuerFunc = new outFunc(10);

// console.log(typeof(closuerFunc)) // 내부함수를 리턴하지 않을때 데이터타입은 객체가 되고
// console.log(typeof(closuerFunc)) // 내부함수를 리턴하지 할때 데이터타입은 함수가 된다.

/*
  1. 함수를 중첩으로 사용하여 외부와 단절 시킴.
  2. return을 사용하여 외부에 함수를 노출, 외부에서 매개변수들을 통하여 내부함수에 접근할 수 있다.
  3. 함수를 만들어내는 공장과 같다. (생성자를 통해서 만들 경우)
  4. 추후 class와 유사 : 객체의 형태로 제공 -> 내부함수가 그 역할을 한다.
*/
