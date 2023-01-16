const 이름5 = "kim";
//이름이라는 변수에 type을 지정할 수 있다.

let 이름6: string = "kim";
let age2: number = 50;
//undefined를 값으로 넣고 싶을 때
let 결혼했니: undefined = undefined;
let 회원들: string[] = ["kim", "park"];
let 가족들: string[] = ["park", "choi"];
let 가족나이: number[] = [23, 27];
let 객체회원들: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};
let 회원들2 = 23;

let 이름: string = "최현지";
let 나이: number = 25;
let 출생지역: string = "눤";

let obj: { 제목: string; 가수: string } = {
  제목: "숲",
  가수: "최유리",
};

type objType = {
  member: string[];
  days: number;
  started: boolean;
};

let project: objType = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
