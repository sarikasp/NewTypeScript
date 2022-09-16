// let x: number = 10
// console.log(x)

// // Program 1:

// function additionA(p,q){
//     console.log(p+q)
// }

// additionA(34, 32)


// // Program 2:

// function additionB(p: number,q: number){
//     if(typeof p == "number" && typeof q == "number"){
//         console.log(p+q)
//     }
//     else {
//         console.log("Please enter the correct values!")
//     }
// }

// additionB(34, 32)
// additionB('45', '9')


// // Program 3:

// function additionC(x:number,y:number){
//     console.log(x+y)
// }
// additionC('10',10)


// // basic data type 
// let s1 = 10
// s1 ='ch'


// // Program 4:

// function additionD(x: number, y: number, res: boolean, greet: string) {
//   if (res) {
//     console.log(x + y);
//     console.log(greet);
//     return x + y;
//   } 
// }

// let newSum = additionD(25, 32, true, "gOOd moRNIng!");
// console.log(newSum);


// Program 5: 

// function multiplicationA(p: number,q: number): void{
//     console.log(p*q)
// }

// multiplicationA(34, 32)


// // Program 6: 

// function multiplicationB(p: number,q: number): number{
//     console.log(p*q)

//     return p*q
// }

// let mulRes = multiplicationB(4, 32)
// console.log(mulRes)


//  Program 7:

// let flowers2: string[] = ["Orchid", "Jasmine", "Lily", "Rose", "Gypsy"];
// let marks2: number[] = [23, 45, 6, 7, 54];

// console.log(flowers2)
// console.log(marks2)

// Tuple (array of fixed length and specfic data type)


// // program 8:

// let roleA:[number,string] = [1,"admin"]
// roleA.push(12)


// Program 9:

// Object

// let Student1 = {
//     firstName: "Gauri",
//     lastName: "Pansare",
//     skills: ["JavaScript", "Python"]
// }

// console.log(Student1)


// // Program 9:

// let Student2:{
//     firstName: string,
//     lastName: string,
//     skills: [string, string]
// } = {
    // firstName: "Gauri",
    // lastName: "Pansare",
    // skills: ["JavaScript", "Python"]
// }
// console.log(Student2)



// Program 10:

// type:

type person = {
    firstName:string;
    lastName:string;
    age:number;
    skills:string[]
}


let Student3: person = {
    firstName: "Gauri",
    lastName: "Pansare",
    age: 24,
    skills: ["JavaScript", "Python"]
}

console.log(Student3)


// Program 11:

// union:

function additionNum(a:number|string, b:number|string){
    if(typeof a == "number" && typeof b == "number"){
        console.log(a+b)
    }
    else {
        console.log(Number(a)+Number(b))
    }

}
additionNum(90,12)
additionNum('20','10')