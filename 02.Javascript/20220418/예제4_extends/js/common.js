'use strict'

class Test {
  constructor(){
    this.num = 'testNum';
  }
  popupFunc(){
    alert('this is popup!!');
  }
}

let testBox = new Test();

console.log(testBox.popupFunc());
