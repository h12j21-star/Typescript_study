function c(arr) {
    var newArr = [];
    arr.forEach(function (item) {
        if (typeof item === "string")
            newArr.push(parseFloat(item));
        else {
            newArr.push(item);
        }
    });
    return newArr;
}
console.log(c([1, "33", 3]));
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
function rf(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else {
        return x.subject[x.subject.length - 1];
    }
}
console.log(rf({ subject: "math" })); //이 경우 'math'를 return
console.log(rf({ subject: ["science", "art", "korean"] }));
var nemo = {
    width: 3,
};
// type alias에서는 타입 재정의가 불가능
// 대체개념으로 interface가 존재함
function 가위바위보(arr) {
    return ["가위", "보"];
}
console.log(가위바위보(["가위", "보", "가위"]));
var Abc = function (x, y) {
    return x + y;
};
var fS = function (x, y) {
    return x + y;
};
console.log(fS("hi", "hyeonji"));
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
회원정보.changeName();
var obj = {
    pluse: function (x, y) {
        return x + y;
    },
    minus: function (x, y) {
        return x - y;
    },
};
console.log(obj.pluse(1, 3));
console.log(obj.minus(1, 3));
