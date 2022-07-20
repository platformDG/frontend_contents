'use strict'
// class product {
//   constructor(){
//
//   }
// }


function Product(name, price){
  this.name = name;
  this.price = price;
  this.getProduct = function(){
    console.log('get - product');
  }
}
function Food(name, price){
  Product.call(this, name, price);
  this.category = 'Food';
}

function Bakery(name,price){
  Product.call(this, name, price);
  this.category = 'bakery';
  this.pdCheck = function (){
      alert(`${bread.category} 카테고리에서 구매하신 상품은 ${bread.name}이고 상품의 금액은 ${bread.price}`);
  }
}

// let pd = new Product('사과',5000);
// console.log(pd.price);
// pd.getProduct();
//
// let bread = new Food('choco-bread', 5000);
// console.log(bread.category);

let bread = new Bakery('cheese-bread', 7000);

bread.pdCheck();
