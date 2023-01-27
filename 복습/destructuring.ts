interface Person {
  student: boolean;
  age: number;
}
let person: Person = { student: true, age: 20 };

function 함수({ student, age }: Person) {
  console.log(student, age);
}
함수({ student: true, age: 20 });

function max(...a: number[]): number {
  let max = 0;
  a.forEach((item) => {
    if (max <= item) {
      max = item;
    }
  });
  return max;
}

console.log(max(1, 4, 22, 333));
interface Info {
  user: string;
  comment: number[];
  admin: boolean;
}
function f({ user, comment, admin }: Info) {
  console.log(user, comment, admin);
}

f({ user: "kim", comment: [3, 5, 4], admin: false });

type Arr = (number | string | boolean)[];
function f2([a, b, c]: Arr) {
  console.log(a, b, c);
}
