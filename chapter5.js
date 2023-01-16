//함수 사용법
var y; //변수만 만들면 any 자동할당
// 1. return
function 함수return(x) {
    return x * 2;
}
// 에러 : 함수return('6');
// 2. 함수에서 void 타입 활용 가능 ,return 할 값이 없을 때
function 함수void(x) {
    1 + 1;
}
// *파라미터와 타입을 지정해주면 꼭 파라미터를 작성해줘야한다.
함수void(2);
// (x:number : undefined),(x?: number) 같다. 파라미터를 안넣어도 되는 함수를 만들 때
function 함수2(x) { }
함수2();
//타입스크립트는 엄격하기 때문에 왼쪽타입이 확실하게 타입이어야하는데, 문제1은 현제 union타입이다.
/*function 문제1(x:number | string) : void {
  console.log(x+3)
}
문제1(2)*/
function 문제1(x) {
    if (typeof x === "number") {
        console.log(x + 3);
    }
}
문제1(2);
// 숙제1
// x? 없을때 유니온 undefined  ?가 있으면 값이 없으면 에러가 나지않는다.
function ch5Hw1(name) {
    if (typeof name === "string") {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name, " \uC785\uB2C8\uB2E4"));
    }
    else if (typeof name === "undefined") {
        console.log("이름이 없습니다");
    }
}
ch5Hw1("홍길");
//숙제2
//숫자, 문자넣을때
function ch5Hw2(str) {
    return str.toString().length;
}
//숙제3
//함수 파라미터 : 월소득:숫자,집보유여부:boolean,매력점수 : string
// 할당을 해주면 타입지정 안해도 됨
function ch5Hw3(소득, 집보유, 매력점수) {
    var score = 0;
    if (집보유) {
        score += 500;
    }
    if (매력점수 === "상") {
        score += 100;
    }
    score += 소득 * 1;
    if (score >= 600) {
        return "결혼가능";
    }
    return "";
}
console.log(ch5Hw3(70, false, "하"));
