// 문자열 배열
var name1 = ["kim", "park"];
//name속성은 옵션 없어도 에러를 내지 마라
var name2 = { name: "kim" };
//두 타입중하나
var name3 = 123;
//인자 : number , return  number
function 함수(x) {
    return x * 2;
}
var john = [123, false];
var john2 = { name: "kim" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
