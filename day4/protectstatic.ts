//private,protected 붙이면
//protected : class{}안에서만 사용가능 + extends된 class{}안에서 사용가능,자식 불가능
// private extends된 것은불가능 자식은 가능
//static 키워드 붙이면 부모 class 에 직접 부여됨 (+자식에게 안물려줌)
class User {
  protected x = 10;
}
class NewUser extends User {
  doThis() {
    this.x = 20;
  }
}
let 자식 = new User();
console.log(자식);
//x가 static일 경우 부모만 사용할 수 있다. 자식들이 물려 받지 못한다.
//console.log(User.x)

class User2 {
  static skill = "js";
  intro = User2.skill + "전문가입니다";
}
User2.skill = "ts";
let 철수 = new User();
console.log(철수);

//숨기고 싶다면 private,protected를 사용하자

//
class User3 {
  private static x = 10;
}
// User3만 가능하고 숨긴다.

//static은 언제 사용할까
// 기본설정값 입력, class로 부터 생성되는 object가 사용할 필요가 없을 경우
