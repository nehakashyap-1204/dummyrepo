// Loops :-
// For loop:
for(let i = 1; i <= 10; i++) {
    // console.log("Hello World")
}

//Calculate sum of 1 to 10;
let sum = 0;
for(let i = 0; i <= 10; i++) {
    sum += i;
}
// console.log("Sum =", sum )

// While loop:
let i = 1;
while (i <= 10) {
    // console.log("Hello JavaScript")
    i++;
}

// Do while loop:
let j = 1;
do {
    // console.log("j =", j);
    j++;
} while(j <= 5);


// for of loop:- (for String & Array)

let str = "JavaScript";
let size = 0;
for(let i of str) {
    // console.log("i =", i);
    size++;
}
// console.log("String size =", size)


//for in loop:- (Object)
let student = {
    name : "Neha Kashyap",
    age : 20,
    cgpa : 8.7,
    isPass : true,
};
for(let key in student) {
    // console.log("key =", key, " value=", student[key])
}

//practice question1:
for(let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}

//practice question2:
// let gameNum = 12;
// let userNum = prompt("Guess the game number : ");
// while (gameNum != userNum) {
//     userNum = prompt("you entered wrong number. Guess again :")
// }
// console.log("Congratulations, you entered the right number");



// ***   Strings   ***
// let fullName = "NehaKashyap";
// console.log(fullName);
// console.log(fullName.length);
// console.log(fullName[4]);


//Template Literals :
let specialString = `This is a template literals`;
// console.log(specialString);

let obj = {
    item : "pen",
    price : 10,
};
// console.log("The cost of", obj.item, "is", obj.price, "rupees");
// console.log(`The cose of ${obj.item} is ${obj.price} rupees`);
// console.log(`This is template literal ${1+2+3}`);         

//Escape character:
// console.log("Neha\nKashyap");
// console.log("Neha\tKashyap");

// let s = "Neha\nKashyap";
// console.log(s.length);


// *** String methods:-  ***
let st = "NEHA KASHYAP";
// st = st.toUpperCase();
// st = st.toLowerCase();
// console.log(st);

// let t = "   rahul    kashyap    "
// console.log(t.trim());


// let s = "helloworld";
// console.log(s.slice(1, 6));

let st1 = "neha";
let st2 = " kashyap";

console.log(st1 + st2);
console.log(st1.concat(st2));

let s1 = "hello";
console.log(s1.replace("h","y"));

let m = "ILoveJS";
console.log(m.charAt(3));

let fullName = prompt("Enter your Fullname :");
console.log(fullName)
 let username = "@" + fullName + fullName.length;
 console.log(username);
