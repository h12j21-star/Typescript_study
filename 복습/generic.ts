function 개수출력<T extends string | string[]>(x: T) {
  console.log(x.length);
}
개수출력<string>("hello");

interface Animal {
  name: string;
  age: number;
}

let data = '{"name":"age","age":1}';

function A<T>(x: string): T {
  return JSON.parse(x);
}
let a = A<Animal>(data);
console.log(a);

class Person2<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let b = new Person2<string>("어쩌구");
b.name;
