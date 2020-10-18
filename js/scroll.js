// 전역변수 선언
const aTags = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("#container > section");

const ACTIVE_CLASS = "active";

function main() {
    // a 태그를 선택하면 할일
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].addEventListener("click", handleClick);
    }

    // 스크롤시 할일
    window.addEventListener("scroll", handleScroll);
}

function handleClick(event) {
    const index = event.target.getAttribute("data-index");
    const sectionY = sections[index].offsetTop;

    window.scrollTo({
        top: sectionY,
        left: 0,

        behavior: "smooth"
    });
}

function handleScroll() {
    const currentY = window.pageYOffset;

    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= currentY) {
            const index = sections[i].getAttribute("data-index");

            // 모든 a 태그의 active 클래스를 제거하고, index에 해당하는 번호만 active 클래스 추가
            for (let j = 0; j < aTags.length; j++) {
                const hasActive = aTags[j].classList.contains(ACTIVE_CLASS);

                if (hasActive) { aTags[j].classList.remove(ACTIVE_CLASS); }
            }

            aTags[index].classList.add(ACTIVE_CLASS);
        }
    }
}

main();