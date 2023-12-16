// window.console.log("Hello JS")
// window.alert("Hello there..");
// let naam = prompt("Enter your name here:")
// console.log(naam);

// console.log(window.document);  //output: to get all html and css code.
// console.dir(window.document);  //output: to get properties or methods of document object

/*let button = document.getElementById("myId");
console.dir(button);*/

/*let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);*/

/*let para = document.getElementsByTagName("p");
console.dir(para);*/

//Query Selector:

// let firstEle = document.querySelector("p");
// console.dir(firstEle);  //first element

// let allEle = document.querySelectorAll("p");
// console.dir(allEle);   //All elements

/*let firstEle = document.querySelector(".heading");
console.dir(firstEle);  //first element*/

/*let allEle = document.querySelectorAll(".heading");
console.dir(allEle);   //All elements*/

/*let buttonid = document.querySelectorAll("#myId");
console.dir(buttonid);*/

// let div = document.querySelector("Div");
// console.dir(div);

let heading = document.querySelector("h1");
// heading.innerText = "New Heading";

//Practice Question1:
// let h2 = document.querySelector("h2")
// console.dir(h2.innerText);
// h2.innerText =h2.innerText + " from Neha Kashyap"

//Practice Question2:
let divs = document.querySelectorAll(".box");

// console.dir(divs);
// divs[0].innerText = "New Value 1";
// divs[1].innerText = "New Value 2";
// divs[2].innerText = "New Value 3";

//using loop:
let idx = 1;
for(div of divs) {
    div.innerText = `new value ${idx}`;
    idx++;
}
