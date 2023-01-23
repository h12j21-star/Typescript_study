var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//private,protected 붙이면
//protected : class{}안에서만 사용가능 + extends된 class{}안에서 사용가능,자식 불가능
// private extends된 것은불가능 자식은 가능
//static 키워드 붙이면 부모 class 에 직접 부여됨 (+자식에게 안물려줌)
var User = /** @class */ (function () {
    function User() {
        this.x = 10;
    }
    return User;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser;
}(User));
var 자식 = new User();
console.log(자식);
//x가 static일 경우 부모만 사용할 수 있다. 자식들이 물려 받지 못한다.
//console.log(User.x)
var User2 = /** @class */ (function () {
    function User2() {
        this.intro = User2.skill + "전문가입니다";
    }
    User2.skill = "js";
    return User2;
}());
User2.skill = "ts";
var 철수 = new User();
console.log(철수);
//숨기고 싶다면 private,protected를 사용하자
//
var User3 = /** @class */ (function () {
    function User3() {
    }
    User3.x = 10;
    return User3;
}());
// User3만 가능하고 숨긴다.
//static은 언제 사용할까
// 기본설정값 입력, class로 부터 생성되는 object가 사용할 필요가 없을 경우
