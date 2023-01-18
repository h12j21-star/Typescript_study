// type alias에 함수type저장해서 쓰는 법
type 함수타입 = (a: string) => number;
//type alias를 사용하려면 함수표현식을 사용해야한다.

let 함수: 함수타입 = function () {
  return 1;
};
함수("hello");
