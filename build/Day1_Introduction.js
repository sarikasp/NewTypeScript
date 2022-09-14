"use strict";
// console.log('Sarika')
// // Program 1:
// function firstAdd(a:number, b:number){
//     console.log(a+b)
// }
// firstAdd(10,20)
// // Program 2:
// function secondAdd(a, b){
//     if(typeof(a) == 'number' && typeof(b) == 'number'){
//         console.log(a+b)
//     }
//     else{
//         console.log('Please enter the correct values:')
//     }
// }
// secondAdd(10,20)
// // secondAdd('17','13')
// Function
// // Program 1:
// function thirdAdd(x: number, y: number, res: boolean, msg: string): void {
//   if (res) {
//     console.log(x + y);
//     console.log(msg);
//   }
// }
// thirdAdd(25, 32, true, "Addition Done!");
// // typescript
// let x: number = 20
// let y: string = "Gauri"
// let z: boolean = false
// // Program 2:
// function fourthFunction(x: number, y: number, res: boolean, msg: string): number {
//     if (res) {
//       console.log(x + y);
//       console.log(msg)
//       return x+y
//     }
//     else{
//         return 0;
//     }
//   }
// let newSum = fourthFunction(25, 32, true, "Addition")
// console.log(newSum)
// Object:
// // Program 1:
// let student:object = {
//     firstName:"Sarika",
//     lastName:"Pansare",
//     age:24
// }
// console.log(student)
// Program 2:
let student2 = {
    firstName: "Gauri",
    lastName: "Pansare",
    age: 24,
};
// console.log(student2);
// console.log(student2['firstName'])
// console.log(student2.lastName)
// console.log(student2.age)
let objValue;
for (objValue in student2) {
    console.log(student2[objValue]);
}
// let k: keyof typeof student2;
// for (k in student2) {
//   const v = student2[k];  // OK
//   console.log(v)
// }
