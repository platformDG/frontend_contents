'use strict'

class User {
  constructor(name, age, local){
    this.name = name;
    this.age = age;
    this.local = local;
  }
  indoduce() {
    alert(`안녕하세요, ${this.local}에 사는 ${this.age}살, ${this.name}입니다.`);
  }
  get age(){
    return this._age;
  }
  set age(value){
    this._age = value < 0 ? 0 : value;
  }
}

let user = new User('홍길동', -540, '대구');

user.indoduce();
