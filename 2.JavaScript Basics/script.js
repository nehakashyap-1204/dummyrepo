// Arithmetic Operator :-
let a = 5;
let b = 2;
// console.log("a =", a, "b =", b)
// console.log("a + b = ",a + b);
// console.log("a - b = ",a - b);
// console.log("a * b = ",a * b);
// console.log("a / b = ",a / b);
// console.log("a % b = ",a % b);
// console.log("a ** b = ",a ** b); // 5^2

//Unary Operator
let x = 4;
let y = 3;
console.log("a =", a, "b =", b)
// a = a +1;
// a++;

// b = b - 1;
// b--;
// console.log(a)
// console.log(b);

//Pre Increment :-
// console.log("++a =", ++a);

//Post Increment :-
// console.log("a++ =", a++);
// console.log(a);

//Pre Decrement :-
// console.log("--b =", --b);

//Post Decrement :-
console.log("b-- =", b--);
console.log(b);


// Assignment Operator :-
let m = 15;
let n = 6;
// m += 3; 
// m -= 3; 
// m *= 3; 
// m /= 3; 
// m %= 3; 
// m **= 2; 
// console.log("m =", m)


//Comparison Operator :-
let p = 5;
let q = 2;
// console.log("5 == 2", p == q); // false
// console.log("5 != 2", p != q); // true
// q = p;
// console.log("5 == 5", p == q); //true

let i = 7; //number
let j = "7"; //string -> number
// console.log("5 == 2", p == q);
console.log("7 === 7", p === q); //false


// let num = prompt("Enter a number: ");
// if (num%3 === 0) {
//     console.log(num, "is a multiple of 3");
// } else {
//     console.log(num, "is NOT a multiple of 3");
// }

//Practice
let score = prompt("enter your score(0-100)")
let grade;

if (score >=90 && score <= 100) {
    grade = "A";
} else if(score >= 70 && score <= 89) {
    grade = "B";
} else if(score >= 60 && score <= 69) {
    grade = "C";
} else if(score >= 50 && score <= 59) {
    grade = "D";
} else if(score >= 0 && score >= 49) {
    grade = "E";
}
console.log("According to your scores, your grade was : ", grade);