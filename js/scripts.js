// 브라우저 창 높이
var currentHeight = window.innerHeight;
var currentScrollValue = document.documentElement.scrollTop;

// 네비 a 태그 리스트
var aList = new Array(document.getElementById("1"), document.getElementById("2"), document.getElementById("3"), document.getElementById("4"));

// 윈도우 화면의 넓비 변경 이벤트 리스너
window.addEventListener("resize", function(event){
    currentHeight = window.innerHeight
})

// 스크롤 이벤트 리스너
document.addEventListener("scroll", function(event){
    currentScrollValue = document.documentElement.scrollTop;

    var currentScrollIndex = parseInt(currentScrollValue / currentHeight);
    console.log(currentScrollIndex);

    aList.forEach(a => {
        a.style.color = "#818181";
    });


    aList[currentScrollIndex].style.color = "white";
})

// a 태그 클릭후 실행되는 함수
function scrollByTag(event){
    // 스크롤 옮기기
    document.documentElement.scrollTo(0, currentHeight * (event.id - 1))
    console.log(currentHeight);
}