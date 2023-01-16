// 문자열 배열
let name1: string[] = ["kim", "park"];
//name속성은 옵션 없어도 에러를 내지 마라
let name2: { name?: string } = { name: "kim" };
//두 타입중하나
let name3: string | number = 123;
type 내타입 = string | number;

//인자 : number , return  number
function 함수(x: number): number {
  return x * 2;
}
//꼭 첫번째 : number , 두번째 : boolean
//튜플 타입
type Member = [number, boolean];
let john: Member = [123, false];
type Member2 = {
  name: string;
};
// 모든 object 속성
type Memeber3 = {
  [key: string]: string;
};
let john2: Member2 = { name: "kim" };

class User {
  name: string;
  constructor(name) {
    this.name = name;
  }
}
