//field에 미리 지정이 되어야한다.
// constructor이 존재하는 이유 parameter을 지정할 수 있기때문에 다양한 name속성을 부여해줄 수 있다.
// public 키워드 : public붙으면 모든 자식들이 이용가능하다. 생략가능
// 함수 : 프로토타입에 저장되는 함수
//private 자식들이 수정 할 수 없다.
// 수정하는 것을 막을때 public으로 있어도 함수에서 바꿀 수도 있으니까. private를 사용하여 수정하지 못하도록 한다.
// 자식이 private를 바꾸고 싶다면 class 안에 변경함수를 만들고 자식들이 이 함수를 사용한다. class안에서는 변경이 가능하기 때문에

class User {
  name: string;
  familyName: string = "kim";
  constructor(a) {
    this.name = a + this.familyName;
  }
}
let 유저1 = new User("park");
유저1.name = "안뇽";

// private 사용하면 class안에서만 수정이 가능하고 이용가능하다. 유저1.name 은 수정이 불가하다.
// 예시 :

class Person {
  constructor(public name: string) {
    // 이자리에 들어온 파라미턴는 자식의 속성에 나타내주세요 this. 생략가능
  }
}
let 자식 = new Person("kim");
console.log(자식);
