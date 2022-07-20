'use strict'
//도형 클래스
class Shape {
  static circleRate = 3.14;
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  inputDraw(a,b){ //매개변수 추가 : 값을 받아와서 그리기
    console.log(`${a}; ${b}`);
  }
  draw(){
    console.log('도형그리기');
  }
  getArea(){
    console.log(`${this.width*this.height}`);
  }
}
//사각형 클래스 도형클래스 상속
class Rectangle extends Shape{
  draw(){
    console.log('사각형그리기');
  }
  getArea(){
    console.log(`사각형의 넓이 : ${this.width*this.height}`);
  }
}
//삼각형 클래스 도형클래스 상속
class Triangle extends Shape{
  draw(){
    console.log('삼각형 그리기');
    super.draw();
  }
  getArea(){
    console.log(`삼각형의 넓이 : ${this.width*this.height/2}`);
  }
}
class Circle extends Shape{
  constructor(radius, color){
    super(); //생성자 재정의 시 부모의 field를 사용하지 않더라도 먼저 호출후 아래 재정의 하여 사용
    this.radius = radius;
    this.color = color;
  }
  getArea(){
    console.log(Shape.circleRate);
    console.log(`원의 넓이 : ${this.radius * this.radius * Shape.circleRate}`);
  }
  rotate(){ //개별함수 만들기
    console.log('원형도형 회전하기');
  }
}


let rect = new Rectangle(5,8,'red');
let tria = new Triangle(5,8,'blue');
let circle = new Circle(10, 'yellow');
circle.getArea();
circle.rotate();
