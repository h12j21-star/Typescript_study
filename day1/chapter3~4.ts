//number또는 string 타입이 들어 올 수 있따.
//union type이라고 한다.
let 회원: number | string | boolean = 123;

let person: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: 123 };
//any : 타입 실드 해제 문법이다. 추천하지 않음
let 이름3: any;
이름3 = 123;
이름3 = [];

let 이름4: unknown;
이름4 = 2323;
이름4 = "2323";

//수학연산도 타입이 맞아야한다.
// string | number 자체는 새로운 타입이라고 생각하기

let 나이2: string | number;
//let 나이 : unknow = 1;
// 에러 : 나이2 - 1;

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "phil",
  friend: "john",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
