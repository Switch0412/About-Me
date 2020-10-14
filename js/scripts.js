// I can do whatever i want

// 브라우저 창 높이
let currentHeight = window.innerHeight;
let currentScrollValue = document.documentElement.scrollTop;

// 네비 a 태그 리스트 (getElementsByTagName 은 배열을 리턴하지 않기 때문에 Array.from 을 사용해 배열로 변환)
let aList = Array.from(document.getElementsByTagName("a"));

// section 리스트
let sectionList = Array.from(document.getElementsByTagName("section"));

function checkCurrentScrollIndex(currentScrollValue, secList) {
    console.log(secList[2].offsetHeight);


    // TODO 다 더해서 완료해야함
    for (let i = 1; i < secList.length; i++) {
        if (secList[i].offsetHeight <= currentScrollValue || secList[i + 1].offsetHeight >= currentScrollValue) {
            return i;
        }
    }
}

// 윈도우 화면의 넓비 변경 이벤트 리스너
window.addEventListener("resize", function(event) {
    currentHeight = window.innerHeight
})

// 스크롤 이벤트 리스너
document.addEventListener("scroll", function(event) {
    currentScrollValue = document.documentElement.scrollTop;

    // 처음 섹터 인덱스와 현재 섹터 인덱스
    let currentScrollIndex = null;
    let updatedScrollIndex = parseInt(currentScrollValue / currentHeight);

    checkCurrentScrollIndex(updatedScrollIndex, sectionList);

    // 처음 섹터 인덱스와 현재 섹터 인덱스가 다를경우
    if (currentScrollIndex != updatedScrollIndex) {
        currentScrollIndex = updatedScrollIndex;

        aList.forEach(function(aTag, index) {
            // 현제 섹터 인덱스와 배열 인덱스가 같을경우
            if (updatedScrollIndex == index) {
                // a 태그리스트의 인덱스의 색을 white로 바꿈
                aList[index].style.color = "white";
            } else {
                // 아니면 #818181으로 바꿈
                aTag.style.color = "#818181";
            }
        });
    }
})

// a 태그 클릭후 실행되는 함수
function scrollByTag(event) {
    // 스크롤 옮기기
    document.documentElement.scrollTo(0, currentHeight * (event.id - 1));
    console.log(currentHeight);
}