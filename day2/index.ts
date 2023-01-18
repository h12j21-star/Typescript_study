let 제목 = document.querySelector("#title");
//defensive하게 코드를 짤 수 있다.
//narrowing 1
if (제목 != null) {
  제목.innerHTML = "반가워요";
}
//narrowing2 가장많이사용
if (제목 instanceof Element) {
  제목.innerHTML = "반가워요";
}
//narrowing3 잘사용x
//let 제목 = document.querySelector("#title") as Element
// 목.innerHTML = "반가워요";
// 옵셔널체이닝
if (제목?.innerHTML) {
  제목.innerHTML = "방가";
}
//tsconfig.ts 에"strictNullChecks": true 설정
let 링크 = document.querySelector(".link");

//태그의 href속성 내용을 바꿔보자
//href style class 이런것들 사용할수있다.
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}
//타입스크립트에서 eventListender적용하기
let 버튼 = document.querySelector("#button");
// 버튼에 addEventListener가능하면 적용 아니면 undefined 설정

let img = document.querySelector("#image");
/*버튼?.addEventListener("click", function () {
  img.src = "new.jpg";
});
*/
let 링크2 = document.querySelectorAll(".naver");

//숙제2
링크2.forEach((item) => {
  if (item instanceof HTMLAnchorElement) {
    item.href = "https://kakao.com";
  }
});
