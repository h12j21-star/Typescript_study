// index signature사용하면 object 타입지정을 한번에 할 수 있다.
//index signature와 중복되는 속성은 금지시킨다.
interface StringOnly {
  age: 20; //literal도 가능하다.
  [key: string]: string | number; // 모든 속성은 string 또는 number을 가진다.
}
let user: StringOnly = {
  name: "kim",
  age: 20,
  location: "seoul",
};

// 속성이름이 숫자인 경우에는?

//
interface MyType {
  "font-size": {
    "font-size": {
      "font-size": number;
    };
  };
}
//
let css: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

//위의 타입을 줄이기 recursive하게 타입 만들기

interface MyType2 {
  "font-size": MyType2 | number; // 마입타입과 같은 속성을 가질 수 있다.
}

let css2: MyType2 = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

//숙제1
let obj: {
  [key: string]: string | number;
} = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

// 숙제2
interface Obj2 {
  "font-size": number;
  [key: string]: Obj2 | number;
}
let obj2: Obj2 = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
