let person = { student: true, age: 20 };
function f({ student, age }) {
    console.log(student, age);
}
function max(...a) {
    let max = 0;
    a.forEach((item) => {
        if (max < item) {
            max = item;
        }
    });
    return max;
}
console.log(max(1, 2, 3, 4));
// 2
function ff({ user, comment, admin, }) {
    console.log(user, comment, admin);
}
ff({ user: "kim", comment: [3, 5, 4], admin: false });
//3
function fff([a, b, c]) {
    console.log(a, b, c);
}
fff([40, "fff", false]);
