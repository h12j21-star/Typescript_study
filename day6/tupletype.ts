//array type 지정하기

let 멍멍: (string | boolean)[] = ["dog", true];

// 자료의 순서도 지정해준다.
let 냐옹: [string, boolean] = ["dog", true];

// tuple안 옵션표시 가능
// ? 는 마지막 자리에만 가능

let 멍멍멍: [string, boolean?] = ["dog"];

// rest parameter
// tuple type 지정가능
function 함수(...x: [number, string]) {
  console.log(x);
}

함수(1, "2");

// spread
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];

// 숙제1
let 음식: [string, number, boolean] = ["붕어빵", 2000, true];

//숙제2

let arrhw: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  true,
  false,
  true,
];

//숙제3
function hw3(...p: [string, boolean, ...(number | string)[]]) {
  console.log("출력");
}

hw3("string", true, "33");
hw3("string", true, 33);

//숙제4
function hw4(...rest: [...(number | string)[]]): [number[], string[]] {
  let num: number[] = [];
  let str: string[] = [];
  let result: [number[], string[]] = [[], []];
  rest.forEach((item) => {
    if (typeof item === "number") {
      num.push(item);
    } else {
      str.push(item);
    }
  });
  result[0] = num;
  result[1] = str;
  return result;
}
console.log(hw4(1, 2, "3", "3"));
