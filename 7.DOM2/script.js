/*let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name1 = div.getAttribute("name");
console.log(name1);*/

//SET ATTRIBUTE:
/*
let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));

//GET ATTRIBUTE:
let cls = para.getAttribute("class");
console.log(cls);*/

//STYLE:
// let div = document.querySelector("div");
// div.style.backgroundColor = "blue";
// div.style.backgroundColor = "black";

// div.style.fontSize = "30px";

// div.innerText = "this is a div box"
// div.style.visibility = "hidden"

//INSERT ELEMENTS:
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";
// console.dir(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);  // end in the div(inside div)
// div.prepend(newBtn);  // start of the div(inside div)
// div.before(newBtn);  // start of the div(outside div)
// div.after(newBtn);  // end if the div(outside div)

// let p = document.querySelector("p");
// p.append(newBtn);
// p.prepend(newBtn);
// p.before(newBtn);
// p.after(newBtn);


// let heading = document.createElement("h1");
// heading.innerHTML="<i>Hello World</i>"
 
// let div = document.querySelector("body");
// div.append(heading);
// div.prepend(heading);
// div.before(heading);
// div.after(heading);


//DELETE ELEMENTS:
// let para = document.querySelector("p");
// para.remove();
// heading.remove();

//PRACTICE QUESTION1:
let btn = document.createElement("button");
btn.innerText = "Click Me!"
btn.style.backgroundColor = "red";
btn.style.color = "white";

let div = document.querySelector("body");
div.prepend(btn);

//PRACTICE QUESTION2:
let para = document.querySelector("p");
