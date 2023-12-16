// console.log("Neha Kashyap")
fullName = "Neha Kashyap";
age = 21;
price = 75.99;
// console.log(fullName);
// console.log(age);
// fullName = 26; 
// console.log(fullName);
// console.log(price);

// ***  variables:-  ***                      

// var age = 21;
// var age = 25;
// var age = 30;
// console.log(age);
// -> In var(variable) we can redeclare same variable name multiple times.

let year = 8;
year = 10;
year = 6;
console.log(year);
//-> In let (variable) we can't re-declare it, but we can update it.

const PI = 3.14;
// PI = 300;
console.log(PI);
// -> const variable can't be re-declare or update.



// ***   Data Types:-   ***

// Primitives(7)
let num = 50;   // Number
let number = 59.99;   // Number
let name = "Neha Kashyap"   // String   
let x;   // Undefined
let y = null;   // Null
let m = BigInt("989");   //BigInt
let n = Symbol("Hello!");   //Symbol


//Non-primitives(3)

//Object:
const student = {
    fullName : "Neha Kashyap",
    age : 21,
    cgpa : 8.9,
    isPass : true
};
// console.log(student["fullName"]);
// console.log(student.fullName);

student["age"]  = student["age"] + 1
console.log(student["age"]);

//Update:
student["fullName"] = "Rahul Kashyap";
console.log(student["fullName"])


