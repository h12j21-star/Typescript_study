// type변수

//숙제1
// object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
//

type ObjType1 = { name: string; age: number };
type ObjType2 = { name: string; age: string };

type ObjType = ObjType1 & ObjType2;

// error : let personObj: ObjType = { name: "hj", age: 12};

// 에러 안남??

// 숙제2
/**
 * 1. 이 타입은 object 자료형이어야합니다.
   2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
   3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
   4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
 */

type ObjType3 = { color?: string };
type ObjType4 = { size: number };
type ObjType5 = { readonly position: number[] };

type newObjType2 = ObjType3 & ObjType4 & ObjType5;
let hw2Obj: newObjType2 = { color: "red", size: 12, position: [1, 2, 3] };

//숙제3
/**
 * 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
 */

type Info = {
  name: string;
  phone: number;
  email?: string;
};
let user2 = {
  name: "hj",
  phone: 12,
};
/**
 * 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.

2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 

3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
 */
type MoreInfo = {
  미성년자여부: boolean;
};
type newInfo = MoreInfo & Info;
let user3: newInfo = {
  name: "hj",
  phone: 12,
  미성년자여부: true,
};
console.log(user3.name);

//type alias
//1

//object안에 함수 저장하기
//파라미터가 있으면 타입지정을 해야한다.

type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let info2: Member = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName() {
    console.log(" 안녕");
  },
};

//문자하나입력하면 맨앞에 0있으면 제거 문자type으로 return

type cutZero = (str: string) => string;
let hw2: cutZero = function (str) {
  if (str[0] === "0") {
    return str.slice(1);
  }
  return str;
};
type removeDash = (str: string) => number;
let hw2_1: removeDash = function (str) {
  return parseInt(str.split("-").join(""));
};
console.log(hw2("00ff"));
console.log(hw2("5ff"));
console.log(hw2_1("010-4328-8247"));
console.log(hw2_1("01043288247"));

//3
type callbackType = (x: string, y: cutZero, z: removeDash) => void;
let hw3: callbackType = function (x, y, z) {
  console.log(z(y(x)));
  // return z(y(x));
};
hw3("010-1111-2222", hw2, hw2_1);

// class
//1
//Car 클래스 만들기

class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
  tax(): number {
    return this.price / 10;
  }
}
let car1 = new Car("소나타", 3000);
console.log(car1.tax());

// 숙제2
// class

//숫자 -> num속성안 array로 저장
// 문자 -> str속성안 array로 저장
class Word {
  num;
  str;
  constructor(...arr: (string | number)[]) {
    let 숫자들: number[] = [];
    let 문자들: string[] = [];
    arr.forEach((i) => {
      if (typeof i === "string") {
        문자들.push(i);
      } else {
        숫자들.push(i);
      }
      this.num = 숫자들;
      this.str = 문자들;
    });
  }
}
let obj = new Word("kim", 3, 5, "park");
console.log(obj.num);
console.log(obj.str);

// interface

//1

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

//3

/*interface 장바구니 extends Product {

}*/
interface 장바 {
  product: string;
  price: number;
}
let 장바구니: 장바[] = [
  { product: "청소기", price: 600 },
  { product: "삼다수", price: 800 },
];

//3

interface 장바2 extends 장바 {
  card: boolean;
}

//4
interface Obj {
  push: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}
let obj2: Obj = {
  push(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
