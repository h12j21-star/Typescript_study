interface Square {
  name: string;
  width: number;
}
let 네모: Square = { name: "네모", width: 34 };

//중복사항이 있다면 extends하여 사용 할 수 있다.
interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

// interface 이름 중복으로 선언시 extends한 것과 동일하게 동작한다.

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = { brand: "s", serialNumber: 2323, model: ["ff", "tv"] };

interface obj {
  product: string;
  price: number;
}

let 장바구니: obj[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

interface obj2 extends obj {
  card: boolean;
}
let 장바구니2: obj2 = {
  product: "청소기",
  price: 7000,
  card: false,
};

interface obj3 {
  플러스: (a: number, b: number) => number;
  마이너스: (a: number, b: number) => number;
}

let 오브젝트: obj3 = {
  플러스(a, b) {
    return a + b;
  },
  마이너스(a, b) {
    return a - b;
  },
};
