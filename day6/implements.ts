// class에서 타입으로 속성이 있는지 확인하기 위해서는
// interface + inplements 키워드로 확인하면 된다.

/*class Car {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let car = new Car
("morning");*/

// implements 작성법
interface CarType {
  model: string;
  price: number;
}

// class가 이 interface에 있는 속성을 다 가지고 있는가를 확인해준다.
// 빠진 속성이 있다면 에러가 발생한다.
class Car implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let car = new Car("morning");

//implements는 타입지정문법이 아니다.
// interface에 들어있는 속성을 가지고 있는지 확인만 하라는 뜻, class에 타입을 할당하고 변형시키는 것이 아님

/*
class Car implements CarType {
  model; //any 타입
  price; //any 타입
  constructor(a: string) {
    this.model = a;
  }
}*/
