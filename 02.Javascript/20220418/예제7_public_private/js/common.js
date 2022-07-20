'use strict'
class User {
  #idNumber = '1234'; //private field
  constructor(name, age, local){
    this.name = name;
    this.age = age;
    this.local = local;
  }
  //소개
  indoduce() {
    alert(`안녕하세요, ${this.local}에 사는 ${this.age}살, ${this.name}입니다.${this.#idNumber}`);
  }
}

let user1 = new User('tom', 39, 'LA');
console.log(user1.name);
// console.log(user1.#idNumber); private변수이기 때문에 바로 불러올수 없다.
user1.indoduce();
