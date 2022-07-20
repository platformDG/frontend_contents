$(function(){
    //script 영역 before(), after() 사용 예
    //before() 사용 예
    // $("p#first").before("<h2>아이유 - 밤편지1</h2>");
    // $("p#second").before("<h2>아이유 - 밤편지2</h2>");
    // $("p#third").before("<h2>아이유 - 밤편지3</h2>");
    $("p#first").before("<h2>아이유 - 밤편지1</h2>").after("<h2>아이유 - 밤편지2</h2>");
    $("p#second").after("<h2>아이유 - 밤편지3</h2>");
});
