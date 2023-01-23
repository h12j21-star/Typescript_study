import { 이름, Name, Car, Bike, objFunction } from "./h1";

console.log(이름);

//타입도 import export가 가능하다
let 변수: Name = "park";

// <reference path = "./h1.ts"/>
// 이때 옛날에는 변수가 겹칠때 namespace를 사용했다. 해석만 할 수 있음 된다.

let myCar: Car = {
  wheel: 3,
  model: "a",
};
console.log(myCar.wheel);

let yourCar: Bike = {
  wheel: 2,
  model: "a",
};

console.log(myCar.wheel);
console.log(yourCar.wheel);

// 숙제2
let f: objFunction = function (a) {
  console.log(a);
};
f({ abc: "안녕" });

//숙제3
namespace ns1 {
  export type Dog = string;
}
namespace ns2 {
  export interface Dog {
    name: string;
  }
}

let dog1: ns1.Dog = "hobak";
let dog2: ns2.Dog = { name: "a" };

console.log(dog1);
