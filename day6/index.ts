// 재정의
// js 파일에서 변수 가져오기
// ts파일에서 오류를 방지하기위해 재정의한다.
import { B } from "./data2";

declare let a: number;

console.log(a + 1);

//ts->ts파일로 변수 가져다 쓰기
// ts는 글로벌모듈이다. (ambient module)
let b: Dog = "10";
console.log(b + 1);

let c: B = 10;

type apple = string;
