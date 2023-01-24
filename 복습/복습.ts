function c(arr: (number | string)[]) {
  let newArr: number[] = [];
  arr.forEach((item) => {
    if (typeof item === "string") newArr.push(parseFloat(item));
    else {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(c([1, "33", 3]));

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

function rf(x: { subject: string | string[] }): string {
  if (typeof x.subject === "string") {
    return x.subject;
  } else {
    return x.subject[x.subject.length - 1];
  }
}

console.log(rf({ subject: "math" })); //이 경우 'math'를 return
console.log(rf({ subject: ["science", "art", "korean"] }));
//이 경우 'korean'을 return
// rf( { hello : 'hi' } )

type S = {
  color?: string;
  width: number;
};
let nemo: S = {
  width: 3,
};
//OR연산자를 사용하여 union type만들기
type Name = string;
type Age = number;
type NewOne = Name | Age;

//object에 지정한 타입의 경우 합치기 가능
// &
type P1 = { x: number };
type P2 = { y: number };

type P1P2 = P1 & P2;
// type alias에서는 타입 재정의가 불가능
// 대체개념으로 interface가 존재함

function 가위바위보(
  arr: ("가위" | "바위" | "보")[]
): ("가위" | "바위" | "보")[] {
  return ["가위", "보"];
}
console.log(가위바위보(["가위", "보", "가위"]));

// function type 저장하기
type NumOut = (x: number, y: number) => number;

let Abc: NumOut = function (x, y) {
  return x + y;
};

type StringOut = (x: string, y: string) => string;

let fS: StringOut = function (x, y) {
  return x + y;
};

console.log(fS("hi", "hyeonji"));
type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: Member = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeName();
//object안에 타입을 지정한다. interface나 type alias를 객체타입으로 만들어준다.
interface ObjType {
  pluse: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}
let obj: ObjType = {
  pluse(x, y) {
    return x + y;
  },
  minus(x, y) {
    return x - y;
  },
};

console.log(obj.pluse(1, 3));
console.log(obj.minus(1, 3));
