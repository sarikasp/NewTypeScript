"use strict";
// // // Program 1:
// let flowers2: string[] = ["Orchid", "Jasmine", "Lily", "Rose", "Gypsy"];
// let marks2: number[] = [23, 45, 6, 7, 54];
// console.log(flowers2)
// console.log(marks2)
// let marksB : [a:number, b:number,c:number] = [80,85,90]
// console.log(marksB)
// marksB.push(95)
// console.log(marksB)
// // // Program 2:
// let Student:{
//     firstName: string,
//     lastName: string,
//     skills: [string, string]
// } = {
//     firstName: "Gauri",
//     lastName: "Pansare",
//     skills: ["JavaScript", "Python"]
// }
// // Student.skills[0]= 1 // Error: only string allowed
// Student.skills.push("Cypress")
// console.log(Student.skills)
// let num:[number,number] = [122,122]
// // // Program 3:
// Unions:
// function additionNum(a:number, b:number){
//     console.log(a+b)
// }
// additionNum(20,60)
// function additionNum(a:number|string, b:number|string){
//     if(typeof a == "number" && typeof b == "number"){
//         console.log(a+b)
//     }
//     else {
//         console.log(Number(a)+Number(b))
//     }
// }
// additionNum(20,60)
// additionNum('40','70')
// // // Program 4:
// // Union
// type Result = number|string|boolean
// // let a:number|string = "20"
// // let b:number|string|boolean = true
// let a:Result = "20"
// let b:Result = true
// // // // Program 5:
// // Literals
// type firstName = 'Sarika'|'Gauri'
// type lastName = 'Pansare'|'Pawar'
// let Student:{
//     firstName: string,
//     lastName: string,
// } = {
//     firstName: "Gauri",
//     lastName: "Pansare"
// }
// // Program 6:
// Type
// type siblings = { sister: string | string; brother: string | string };
// let Student: siblings = {
//   sister: "Sonal",
//   brother: "Dhruv",
// };
// // Program 7:
let role = "read_only";
let role2 = "read_and_write";
let role3 = "admin";
var Roles;
(function (Roles) {
    Roles[Roles["read_only"] = 1] = "read_only";
    Roles[Roles["read_and_write"] = 2] = "read_and_write";
    Roles[Roles["admin"] = 3] = "admin";
    Roles[Roles["customer"] = 4] = "customer";
})(Roles || (Roles = {}));
if (Roles.read_only) {
    console.log("Read only!");
}
if (Roles.read_and_write) {
    console.log("Read and Write!");
}
if (Roles.admin) {
    console.log("All rights!");
}
if (Roles.customer) {
    console.log("login only!");
}
var Account;
(function (Account) {
    Account[Account["Saving"] = 0] = "Saving";
    Account[Account["Current"] = 1] = "Current";
})(Account || (Account = {}));
if (Account.Saving) {
    console.log("Saving Account!");
}
if (Account.Current) {
    console.log("Current Account!");
}
