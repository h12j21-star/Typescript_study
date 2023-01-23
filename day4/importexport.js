"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var h1_1 = require("./h1");
console.log(h1_1.이름);
//타입도 import export가 가능하다
var 변수 = "park";
// <reference path = "./h1.ts"/>
// 이때 옛날에는 변수가 겹칠때 namespace를 사용했다. 해석만 할 수 있음 된다.
var myCar = {
    wheel: 3,
    model: "a",
};
console.log(myCar.wheel);
var yourCar = {
    wheel: 2,
    model: "a",
};
console.log(myCar.wheel);
console.log(yourCar.wheel);
// 숙제2
var f = function (a) {
    console.log(a);
};
f({ abc: "안녕" });
var dog1 = "hobak";
var dog2 = { name: "a" };
console.log(dog1);
