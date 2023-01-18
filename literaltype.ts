//Literal types
let nameL: "lik"; //nameL은 문자열만 넣을 수 있다.
//인자에 'hello'만 넣을 수 있다.
// 1또는 0만 리턴 할 수 있다.
function 함수(a: "hello"): 1 | 0 {
  return 1;
}
function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위", "보"];
}
//literal type은 const의 업글버전
var 자료 = {
  name: "kim",
} as const;

//as const는 object value를 type으로 지정한다., readonly로 바뀐다.

// 자료.name = kim
//kim이라는 타입만 들어 올 수 있다.
function 내함수(a: "kim") {}
내함수("kim");
