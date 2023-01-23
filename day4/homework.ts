// 숙제1
class User4 {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}

// x : 클래스 안에서만 사용 가능하고, 클래스안 함수에서만 변경가능하다.
// y : User4클래스 안에서만 사용가능하다. 자식이 변경 할 수 없다.
// z : 상속받은 class에서 사용 할 수 있다. 변경도 상속받은 class에서 가능한가?

//숙제2

class User5 {
  private static x = 10;
  public static y = 20;
  static addOne(a: number) {
    User5.x = User5.x + a;
  }
  static printX() {
    console.log(User5.x);
  }
}
User5.addOne(3); //이렇게 하면 x가 3 더해져야함
User5.addOne(4); //이렇게 하면 x가 4 더해져야함
User5.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

//숙제3
class Square {
  x;
  y;
  color;
  div;
  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.div = document.querySelector(".div");
  }
  draw() {
    let mdiv = document.createElement("div");
    mdiv.style.width = this.x + "px";
    mdiv.style.height = this.y + "px";
    mdiv.style.backgroundColor = this.color;
    mdiv.style.position = "absolute";
    mdiv.style.top = `${Math.random() * 400}px`;
    mdiv.style.left = `${Math.random() * 400}px`;

    this.div.appendChild(mdiv);
  }
}
let 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();

//숙제 해설

/**
 * 1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 

x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다.

User의 자식들은 x와 y를 쓸 수 없습니다.

 

2. private static x는 class 내부에서만 수정가능합니다. 

 

3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯 

 

4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데 

약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다. 
 */
