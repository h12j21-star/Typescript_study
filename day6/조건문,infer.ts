3 > 1 ? console.log("맞음") : console.log("아님");

//type 조건식
// 왼쪽에 있는 type이 오른쪽에 포함이 되는가?
type Age<T> = T extends string ? string : unknown;
let aa: Age<string> = "6";

// infer키워드 이런게 있다~
// infer 왼쪽에서 타입 추출해줘 R에 타입이 담김
// T는 string, R은 string
// R에 infer와 같은 위치의 타입을 저장한다.
type 타입추출<T> = T extends (() => infer R)[] ? R : unknown;

type b = 타입추출<string>;
type a = 타입추출<() => void>;
// a는 void

//함수의 return타입만 뽑고싶다
type c = ReturnType<() => void>;

// 문제
type q1<T> = T extends any[] ? T[0] : any;

let qt: q1<string[]> = "7";
let qt2: q1<number> = 6;

//숙제1

type TypeAge<T> = T extends [string, ...any] ? T[0] : unknown;

let age1: TypeAge<[string, number]>;
let age2: TypeAge<[boolean, number]>;

//숙제2
type Hw2Type<T> = T extends (x: infer R) => any ? R : any;

let hw2: Hw2Type<(x: number) => void>;
let hw2_1: Hw2Type<(x: string) => void>;
