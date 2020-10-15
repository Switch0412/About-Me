// 네비 a 태그 리스트 (getElementsByTagName 은 배열을 리턴하지 않기 때문에 Array.from 을 사용해 배열로 변환)
const aList = Array.from(document.getElementsByTagName("a"));

// 브라우저 창 높이
let currentHeight = window.innerHeight;
let currentScrollValue = document.documentElement.scrollTop;

// section 리스트
let sectionList = Array.from(document.getElementsByTagName("section"));

// section들의 y 좌표 리스트
let sectionHeights = new Array();

// section 리스트의 요소들의 높이를 구해 sectionHeight 리스트로 넣음
sectionList.forEach(function(element) {
    let heightCrdinate = currentScrollValue + element.getBoundingClientRect().top;

    sectionHeights.push(heightCrdinate);
});

function main() {
    // 윈도우 화면의 넓비 변경 이벤트 리스너
    window.addEventListener("resize", handleResize);

    // 스크롤 이벤트 리스너
    document.addEventListener("scroll", handleScroll);
}

// 윈도우 사이즈 조절시 실행
function handleResize() {
    currentHeight = window.innerHeight;
}

// 스크롤시 실행
function handleScroll() {
    // 처음 섹터 인덱스와 현재 섹터 인덱스
    let currentScrollIndex = null;
    let updatedScrollIndex = checkCurrentScrollIndex(currentScrollValue, sectionHeights);

    currentScrollValue = window.pageYOffset;
    
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
}

function checkCurrentScrollIndex(currentScrollValue, heightlist) {
    for (let i = 0; i < heightlist.length; i++) {
        if (i != heightlist.length - 1) {
            if (currentScrollValue >= heightlist[i], (currentScrollValue + 2) <= heightlist[i + 1]) { return i; }
        }
        else { return i; }
    }
}

// a 태그 클릭후 실행되는 함수
function scrollByTag(event) {
    // 스크롤 옮기기
    sectionList[event.id - 1].scrollIntoView({ behavior: "smooth", block: "start" });
}

main();