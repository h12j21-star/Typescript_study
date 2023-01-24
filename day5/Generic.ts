// Generic함수 만들기
// 파라미터로 타입을 입력하는 함수
// 타입파라미터 제한두기
function 함수<MyType extends number>(x: MyType): MyType {
  return x[0];
}
// let a = 함수<number>([4,2]);

// console.log(a);

//함수에 타입파라미터를 넣을 수 있다.
// extends키워드로 넣을 수 있는 타입 제한 가능
// class에도 타입 파라미터를 넣을수잇다.

// 숙제1
function print<MyType extends string[] | string>(x: MyType) {
  console.log(x.length);
}
print<string>("hello");
print<string[]>(["kim", "park"]);

//숙제2
interface Animal {
  name: string;
  age: number;
}

let data = '{"name":"dog","age":1}';

//data라는 JSON자료를 object{} 자료로 변환하여 return 하는 함수 만들기
// generic을 사용하면 타입변경이 쉽다. 따라서 확장성이 있다.
function changeF<MyType>(x: string): MyType {
  return JSON.parse(x);
}

let e = changeF<Animal>(data);

console.log(e);

// 숙제3
// class 인스턴스를 만들 때마다 타입파라미터를 지정할 수 있다.
class Person<myType> {
  name;
  constructor(a: myType) {
    this.name = a;
  }
}
let a = new Person<string>("어쩌구");
a.name;
let b = new Person<string[]>(["어쩌구", "저쩌구"]);
a.name;
console.log(a.name);
console.log(b.name);
