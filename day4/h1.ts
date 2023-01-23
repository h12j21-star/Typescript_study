export let 이름 = "kim";
let 나이 = 20;
export type Name = string;
export interface 인터페이스 {}
// namespace는 하나의 object 느낌
namespace 네임스페이스 {
  export type Name2 = string | number;
}
let 변수: 네임스페이스.Name2 = "kim";

// 숙제1
export type Car = {
  wheel: number;
  model: string;
};
export interface Bike {
  wheel: 2;
  model: string;
}

//숙제2
export type objFunction = (a?: object) => void;
