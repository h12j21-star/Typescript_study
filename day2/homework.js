// type변수
let hw2Obj = { color: "red", size: 12, position: [1, 2, 3] };
let user2 = {
    name: "hj",
    phone: 12,
};
let user3 = {
    name: "hj",
    phone: 12,
    미성년자여부: true,
};
console.log(user3.name);
let info2 = {
    name: "kim",
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName() {
        console.log(" 안녕");
    },
};
let hw2 = function (str) {
    if (str[0] === "0") {
        return str.slice(1);
    }
    return str;
};
let hw2_1 = function (str) {
    return parseInt(str.split("-").join(""));
};
console.log(hw2("00ff"));
console.log(hw2("5ff"));
console.log(hw2_1("010-4328-8247"));
console.log(hw2_1("01043288247"));
let hw3 = function (x, y, z) {
    console.log(z(y(x)));
    // return z(y(x));
};
hw3("010-1111-2222", hw2, hw2_1);
// class
//1
//Car 클래스 만들기
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price / 10;
    }
}
let car1 = new Car("소나타", 3000);
console.log(car1.tax());
// 숙제2
// class
//숫자 -> num속성안 array로 저장
// 문자 -> str속성안 array로 저장
class Word {
    constructor(...arr) {
        let 숫자들 = [];
        let 문자들 = [];
        arr.forEach((i) => {
            if (typeof i === "string") {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
            this.num = 숫자들;
            this.str = 문자들;
        });
    }
}
let obj = new Word("kim", 3, 5, "park");
console.log(obj.num);
console.log(obj.str);
let 상품 = {
    brand: "samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
let 장바구니 = [
    { product: "청소기", price: 600 },
    { product: "삼다수", price: 800 },
];
let obj2 = {
    push(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    },
};
