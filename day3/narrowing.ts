// narrowing
function 함수(a: string | undefined) {
  //a 가 string or undefined일때?를 설정해줘야한다.
  //1. &&연산자로 null & undefined타입체크하기
  if (a && typeof a === "string") {
    //a가 string이면 실행
  } else {
  }
}
type Fish = { swim: string };
type Bird = { fly: string };
// Fish와 Bird는 typeof사용을 못함
// 2. 대신 in 키워드를 사용 왼쪽이 오른쪽에 포하이 되어있는지 확인해준다.
function f(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}
//클래스는 오브젝트 뽑는 기계
// 3. 오브젝트 instanceof 부모 class
type Car = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};
//object 타입마다 literal type만들어두면 narrowing이 편해짐
function f3(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("x는 Car타입");
  }
}
