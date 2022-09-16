"use strict";
// // Program 1:
// // void not returning anything ====> donot use return key word
// function fourthAdd(p: number, q: number): void {
//   console.log(p + q);
// }
// fourthAdd(20, 30);
// // Program 2:
// function fithAdd(p: number, q: number): undefined {
//   console.log(p + q);
//   return;
// }
// let r = fithAdd(13, 27);
// console.log(r); // undefined
// // Program 3:
// function sixthFunction(x: number, y: number, res: boolean, greet: string): number {
//   if (res) {
//     console.log(x + y);
//     console.log(greet);
//     return x + y;
//   } else {
//     return 0;
//   }
// }
// let newSum = sixthFunction(25, 32, true, "gOOd moRNIng!");
// console.log(newSum);
// Objects:
// // Program 4:
// let student4: object = {
//     firstName: "Gauri",
//     lastName: "Pansare",
//     age: 24,
//   };
// console.log(student4)
// // Program 5:
// let student5: {
//     firstName: string;
//     lastName: string;
//     age: number;
//   } = {
//     firstName: "Sarika",
//     lastName: "Pansare",
//     age: 24,
//   };
// console.log(student5)
// // Program 6:
// type Info = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   mobileNo: number;
//   isMarried: boolean;
// };
// let student6: Info = {
//   firstName: "Sarika",
//   lastName: "Pansare",
//   age: 24,
//   mobileNo: 9322580270,
//   isMarried: false,
// };
// console.log(student6)
// Array:
// // // Program 7:
// let flowers: string[] = ["Orchid", "Jasmine", "Lily", "Rose", "Gypsy"];
// let rollNo: number[] = [23, 45, 6, 7, 54];
// console.log(flowers)
// console.log(rollNo)
// let marksA : [a:number, b:number,c:number] = [80,85,90]
// console.log(marksA)
// marksA.push(95)
// console.log(marksA)
