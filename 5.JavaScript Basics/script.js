 //  *** Function:-  ***
 // function initialization:
 function myFunction() {
    console.log("Hello World");
 }
// function declaration:
//  myFunction(); 

 //Arrow Function:-
 //sum function
 const sum = (a,b) => {
   console.log(a+b);
 }
//  sum(5,9);

// multiplication function:
const mul = (a,b) => {
   console.log(a*b);
}
// mul(5,5);

//practice question1:-
function countVowels(str) {
   let count = 0;
   for(let char of str) {
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
         count++;
      }
   }
   console.log(count);
}
// countVowels("nehakashyap");

//Arrow function:-
const countVoW = (str) => {
   let count = 0;
   for(let char of str) {
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
         count++;
      }
   }
   console.log(count);
}
// countVoW("neha");


// Callback function:-
let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val) {
//    console.log(val);
// }) ;

//Arrow function:
// arr.forEach(val => {
//    console.log(val);
// })

// let nums = [1,2,3,4,5,6];
// nums.forEach(val => {
//    console.log(val*val);
// })

//Map function:-

//Syntax :
// array.map(function(currentValue, index, arr)


let numbers = [65, 44, 12, 4];
// let newArr = numbers.map(myFun); 
// function myFun(num){
//    return num * 10;
// }

//Arrow Function:
// let newArr = numbers.map((val) => {
//    return val * 10;
// });

// let array = [35,51,34,22,36,54,33,75,87];
// let evenArr = array.filter((val) => {
//    return val % 2 === 0;
// })

//Reduce :-
//Performs some operations & reduces the array to a single value.It returns that single value


// let arr2 = [2,4,6,8,10];
// const output = arr2.reduce((res, curr) => {
//    return res + curr;
// })
// console.log(output);

let arr3 = [4,6,7,8,33,9];
const output = arr3.reduce((prev, curr) => {
   return prev > curr ? prev : curr;
});
console.log(output);


//Practice question1:
let marks = [89,96,78,66,78,90,67,92,98];
const result = marks.filter((val) => {
   return val >= 90;
})
console.log(result);

//Practice question2:
// let n = prompt("Enter a number:")
// let bucket = [];
// for(let i = 1; i <= n; i++) {
//    bucket[i-1] = i;
// }
// console.log(bucket);

//Practice question2:
let nums = [21,34,54,67,94,69,47,48];
const ans = nums.reduce((prev, curr) => {
   return prev + curr;
})
console.log(ans);

//Practice question3:
let a = [8,4,2,5];
const answer = a.reduce((prev, curr) => {
   return prev * curr;
})
console.log(answer);