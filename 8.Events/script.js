// EVENTS:

/* let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("button1 was clicked!");
    let a = 10;
    a++;
    console.log(a);
}*/
/* let btn2 = document.querySelector("#btn2");
btn2.ondblclick =() => {
    console.log("Button was clicked 2 times");
}*/

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }


// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log("you are inside div");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// } 

//EVENT LISTENERS:-

// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", (evt) =>{
//     console.log("button was clicked -HANDLER1")
//     // console.log(evt);
//     // console.log(evt.type);
//     // console.log(evt.target);
//     // console.log(evt.clientX, evt.clientY);
        
// });
// btn1.addEventListener("click", () =>{
//     console.log("button was clicked -HANDLER2")
// });

// const handler3 = ("click", () =>{
//     console.log("button was clicked -HANDLER3")
// });

// btn1.addEventListener("click",handler3)

// btn1.addEventListener("click", () =>{
// console.log("button was clicked -HANDLER4")
// });

// btn1.removeEventListener("click", handler3);

//PRACTICE QUESTION1:-
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"

modeBtn.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})