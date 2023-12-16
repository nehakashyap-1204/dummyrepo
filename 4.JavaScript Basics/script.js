//  ***   Arrays:-   ***
let marks = [92, 89, 86, 57, 66,];
// console.log(marks);

let heroes = ["ironman", "hulk", "thor", "batman", "shaktiman", "spiderman", "antman"];
// console.log(heroes);
 
//for loop:
for(let i = 0 ; i < heroes.length; i++) {
    // console.log(heroes[i]);
}
//for of loop:
for(let hero of heroes) {
    // console.log(hero);
}
 
let cities = ["Ahmedabad", "Mumbai", "Pune", "Delhi", "Chennai"];
for(let i = 0 ; i < cities.length; i++) {
    // console.log(cities[i].toUpperCase());
}

//practice question1:
let sum = 0;
let mark = [85,97,44,37,76,60];
for(let i = 0; i < mark.length; i++) {
    sum += mark[i];
}
let avg = sum/mark.length;
// console.log(mark);
// console.log(`average marks of the class = ${avg}`);

//practice question2:
let items = [250, 645, 300, 900, 50];
for(let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
}
// console.log(items);

//  *** Array Methods:-  ***;
let foodItems = ["potato", "apple", "tometo", "burger","fries"];
// console.log(foodItems);
foodItems.push("paneer", "pizza");
// console.log(foodItems);

foodItems.pop();
// console.log(foodItems);

let i = [250, 645, 300, 900, 50];
// console.log(i.toString());

let arr1 = [87,67,47,99,60];
let arr2 = [90,69,58,63,49];
// console.log(arr1.concat(arr2));


let hero = ["thor", "spiderman", "ironman"];
hero.unshift("krish"); // push value from start
hero.unshift("shaktiman");
console.log(hero);  
hero.shift();    // pop value from start
console.log(hero);

let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr.Strange"];
console.log(marvelHeroes.slice(1,4));

let arr = [1,2,3,4,5,6,7,8];
arr.splice(2, 2, 111, 222);
 
//Add element
// arr.splice(2, 0, 100);

//Delete element
arr.splice(3,1);

//Replace element
arr.splice(3,1,300);


//practice question1:
let compnies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
//1. Remove first company:
// compnies.shift();

//2. Remove Uber & Add Ola:
// compnies.splice(2,1,"Ola");

//3.Add Amazon at end:
compnies.push("Amazon");