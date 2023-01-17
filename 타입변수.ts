//타입이 너무 길다면 변수명에 넣어 사용한다.
type Animal = string | number | undefined;
let 동물: Animal = "kim";
// type alias 타입 변수
//object 변수 타입에 저장하기
//타입변수는 대문자로 시작하기
type AnimalObj = { name: string; age: number };
let animal: AnimalObj = { name: "kim", age: 20 };

//const 값을 변할 수 없다.
//const로 담은 object 수정은 가능함
//typescript를 사용하여 object 자료 수정도 가능하다.
//readonly를 사용하면된다.
type Girlfriend = {
  readonly name: string;
};
//name? : 속성은 string | undefined
type Boyfriend = {
  name?: string;
};
//type변수를 union type으로 합치기가 가능하다
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
// 만들고 싶은 type {x:number,y:number}
// &연산자로 object 타입 합치기
// & 연산자로 object타입 extend하기
type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

// 같은 이름의 type 변수를 재정의 하지 못한다.
