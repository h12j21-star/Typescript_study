//number또는 string 타입이 들어 올 수 있따.
//union type이라고 한다.
var 회원 = 123;
var person = [1, "2", 3];
var 오브젝트 = { a: 123 };
//any : 타입 실드 해제 문법이다. 추천하지 않음
var 이름3;
이름3 = 123;
이름3 = [];
var 이름4;
이름4 = 2323;
이름4 = "2323";
//수학연산도 타입이 맞아야한다.
// string | number 자체는 새로운 타입이라고 생각하기
var 나이2;
//let 나이 : unknow = 1;
// 에러 : 나이2 - 1;
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "phil",
    friend: "john",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
