// keyof
let obj3 = { name: "kim" };
//object의 key를 출력
Object.keys(obj);

interface Person {
  [key: string]: number;
}

type Personkeys = keyof Person;
let a: Personkeys = "name";
//'age'|'name
//타입을 만들었는데 변환을 하고 싶다면

type Car2 = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};
type Typechanger<MyType> = {
  [key in keyof MyType]: string;
};

type 새로운타입 = Typechanger<Car2>;

//숙제1
type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type newType<MyType2> = {
  [key in keyof MyType2]: string | number;
};

type NewBus = newType<Bus>;

let bus: NewBus = {
  color: "red",
  model: 2,
  price: 3,
};

// 숙제2

type GoodType<MyType, T> = {
  [key in keyof MyType]: T;
};

type NewGoodType = GoodType<Bus, boolean>;

type NewGoodType2 = GoodType<Bus, string[]>;
let obj6: NewGoodType2 = {
  color: ["red", "blue"],
  model: ["2", "4"],
  price: ["3", "d"],
};
