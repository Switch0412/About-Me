// Get the modal
const modal = document.querySelectorAll(".modal");

// Get the button that opens the modal
const column = document.querySelectorAll(".column");;

// Get the <span> element that closes the modal
const i = document.getElementsByClassName("close");

function main() {
  // 모든 column의 대한 이벤트 리스너 생성
  for (let i = 0; i < column.length; i++) {
    column[i].addEventListener("click", handleClick);
  }

  // 모든 Modal Background의 대한 이벤트 리스너 생성
  for (let i = 0; i < modal.length; i++) {
    modal[i].addEventListener("click", handleClickModal);
  }

}

function handleClick(event) {
  const targetData = event.target.getAttribute("data-target");
  const target = document.getElementById(targetData);

  // 클릭한 모달 active 클래스 추가
  target.classList.add("active");
}

// FIXME:
function handleClickModal(event) {
  // 만약 Modal 과 active 클래스가 있으면 active 클래스 삭제
  if (event.target.classList.contains("modal") && event.target.classList.contains("active")) {
    event.target.classList.remove("active");
  }
}

main();

