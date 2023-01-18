// 객체 지향 class
// class : object 뽑는 역할
function 기계(구멍) {
    //새로생성되는 object들
    this.q = 구멍;
    this.w = "snowball";
}
//간편하게 object를 만들 수 있다.
var nunu = new 기계("나나");
var garen = new 기계("가가");
/*class Hero {
  constructor(구멍){
    this.q=구멍;
    this.w='snowball'
  }
}*/
// prototype을 사용하여 object에게 데이터를 물려줄 수 있다. 유전자느낌
// 기계.prototype.name = 'kim'
// 부모에게 있다면 자식도 name을 사용할수있다.
// 직접 추가 or prototype에 추가
// 함수추가가능
class Person2 {
    constructor() {
        this.data = 0; //컴파일러가 자동으로 type을 지정해준다.
    }
}
let 사람1 = new Person2();
let 사람2 = new Person2();
class Person3 {
    constructor(a) {
        this.name = a;
    }
    함수(a) {
        console.log("안녕");
    }
}
let 사람3 = new Person3("kim");
let 사람4 = new Person3("park");
