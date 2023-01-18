// interface 사용가능
type Square = { color: string; width: number };
let 네모: Square = { color: "red", width: 100 };

// type keyword

interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
let 학생: Student = { name: "kim" };
// let 선생: Teacher = { name: "kim", age: 20 };

type Animal2 = { name: string };
type Cat = { age: number } & Animal2;
//interface는 중복선언가능 합쳐짐
//type은 중복선언불가능

interface S {
  name: string;
}
interface S {
  score: number;
}
interface Teacher extends S {
  age: number;
}
