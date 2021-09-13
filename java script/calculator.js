const btn = document.querySelectorAll(".input-key");
const screen = document.querySelector(".input-screen");
const screenOutput = document.querySelector(".output-screen");
const output = document.querySelector(".output");
const popElem = document.querySelector(".pop");
const allClear = document.querySelector(".all-clear");
let input=[];
let inputString;
btn.forEach(key => key.addEventListener("click",()=>{
    input.push(key.innerText);
    inputString = input.join("");
    console.log(inputString);
    screen.innerText= inputString;
}));
output.addEventListener("click",()=>{
    if(eval(inputString)===Infinity ||eval(inputString)===undefined){
        screen.innerText="Error Insert a valid argument";
    }else{
    screenOutput.innerText = eval(inputString);}

})
allClear.addEventListener("click",()=>{
    input =[];
    inputString = input.join("");
    console.log(inputString);
    screen.innerText= inputString;
    screenOutput.innerText = "";
})
popElem.addEventListener("click",()=>{
    input.pop();
    inputString = input.join("");
    console.log(inputString);
    screen.innerText= inputString;
})
