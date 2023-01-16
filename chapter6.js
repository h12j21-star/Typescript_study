//type narrowing
//type이 하나로 확정되지 않았을 경우 사용한다.
function 내함수(x) {
    /*if (typeof x === "string") {
      return x + "1";
    } else {
      return x + 1;
    }*/
    var array = [];
    // array[0] = x; x는 union타입
    if (typeof x === "number") {
        array[0] = x;
    }
}
// type assertion문법
// if문 없이 타입을 덮어 쓸 수 있다.
// 용도 : narrowing할때사용,
// 타입에서 a에서 b로 바꾸는 용도는 아니다.
// 무슨 타입이 들어 올지 확실할때 쓰기
function 내함수2(x) {
    var array = [];
    array[0] = x;
}
내함수(123);
//숙제1
//클리닝함수
function 숙제1(x) {
    var arr = [];
    x.forEach(function (item) {
        if (typeof item === "string") {
            arr.push(parseFloat(item));
        }
        else {
            arr.push(item);
        }
    });
    return arr;
}
console.log(숙제1(["1", "2", 3]));
//숙제2
// 과목1 : 과목하나로 지정
// 과목 2개이상: array로 저장
//맨뒤 과목을 return
function 숙제2(obj) {
    if (typeof obj.subject === "string") {
        return obj.subject;
    }
    else if (typeof Array.isArray(obj.subject)) {
        return obj.subject[obj.subject.length - 1];
    }
}
console.log(숙제2({ subject: "math" }));
console.log(숙제2({ subject: ["math", "art", "korean"] }));
// console.log(숙제2({ hello: "hi" }));
