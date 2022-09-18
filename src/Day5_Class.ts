// // Program 1:

// function substarctionA(p: number,q: number): void{
//     console.log(p-q)
// }

// substarctionA(34, 32)

// // Program 2:

// function substarctionAB(p: number,q: number): number{
//     console.log(p-q)

//     return p-q
// }

// let subRes = substarctionAB(55, 32)
// console.log(subRes)

// // Program 3:

// function displayFullName(firstName: string, lastName: string) {
//   return firstName + lastName;
// }
// let fullName = displayFullName("Sarika", "Pansare");
// console.log(fullName);


// // Program 4:

// function additionNum1(x: number, y: number) {
//   return x + y;
// }

// function displayResult(x: number, y: number, fn: Function) {
//   console.log(`Result of sum ${fn(x, y)}`);
// }
// displayResult(10, 74, additionNum1);



// // Program 5:

// function displayResultA(x:number,y:number,fn:(x:number,y:number) => number){
//     console.log(`Result of sum ${fn(x,y)}`)
// }
// displayResultA(10, 60 ,additionNum1)


// // Program 6: 

// class Student {
//     name:string = "Gauri"
// }

// let student = new Student()
// console.log(student.name)


// Program 7:

// public, private, protected, default

class StudentB {
    private age:number = 24
    private firstName:string ;
    public constructor(name:string){
        this.firstName = name;
    }

    // get method
    public getName():string{
        return this.firstName
    }

    // get method
    public getAge():number{
        return this.age
    }

    // set 
    public setName(name2:string){
        this.firstName = name2
    }

}

let obj1 = new StudentB("Gauri");

// // private: not access outside class
// console.log(obj1.firstName)
// console.log(obj1.age)


console.log(obj1.getName())
console.log(obj1.getAge())


obj1.setName("Sarika")
console.log(obj1.getName())