"use strict";
// let x: number = 10
// console.log(x)
let Student3 = {
    firstName: "Gauri",
    lastName: "Pansare",
    age: 24,
    skills: ["JavaScript", "Python"]
};
console.log(Student3);
// Program 11:
// union:
function additionNum(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        console.log(a + b);
    }
    else {
        console.log(Number(a) + Number(b));
    }
}
additionNum(90, 12);
additionNum('20', '10');
