//Literal types
let nameL: "lik"; //nameL의 값으로는 문자열만 넣을 수 있다.

let you: "대머리" | "솔로";
//인자에 'hello'만 넣을 수 있다.
// 1또는 0만 리턴 할 수 있다.
function 함수3(a: "hello"): 1 | 0 {
  return 1;
}
function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위", "보"];
}
console.log(가위바위보("가위"));
//literal type은 const의 업글버전
var 자료 = {
  name: "kim",
} as const;
//as const는 object value를 type으로 지정한다.리터럴로 지정해줘라, readonly로 바뀐다.
// 값이면서 type ?

// 자료.name = kim
//kim이라는 타입만 들어 올 수 있다.
// a : 'kim' 타입지정문법
function 내함수(a: "kim") {}
내함수("kim");
function ch5Hw2() {}
