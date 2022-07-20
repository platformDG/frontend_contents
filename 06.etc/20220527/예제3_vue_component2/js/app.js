'use strict'
/*
  실습1.
  이름 : header-logo
  내용 : <h1><a href="http://naver.com">Home</a></h1>
         컴포넌트를 생성하여 index.html, company.html #app 요소에 추가히시오
*/
/*
  실습2.
  이름 : footer-header
  내용 : <div class="footer-header"><h2><a href="index.html">logo</a></h2></div>
         컴포넌트를 생성하여 index.html, company.html #app 요소에 추가히시오
*/
Vue.component('header-logo',{
  template: '<h1><a href="index.html">Home</a></h1>'
});
Vue.component('footer-header',{
  template: '<div class="footer-header"><h2><a href="index.html">logo</a></h2></div>'
});

let app = new Vue({
  el: '#app',
  data: {
    msg: 'hi vue.js!!',
    menuList: [
      {menu: 'company', ahref:'company.html' },
      {menu: 'product', ahref:'product.html' },
      {menu: 'gallery', ahref:'gallery.html' },
      {menu: 'notoce', ahref:'notoce.html' }
    ],
    fmList: [
      { list: 'list1', ahref:'list1.html' },
      { list: 'list2', ahref:'list2.html' },
      { list: 'list3', ahref:'list3.html' }
    ]
  },
  components: {
    'footer-list':  {
      template: '<ul><li><a href="#">list1</a></li><li><a href="#">list2</a></li><li><a href="#">list3</a></li></ul>'
    }
  }
});
