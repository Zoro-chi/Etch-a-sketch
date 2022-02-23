const body = document.querySelector("body")
const container = document.querySelector("#container");
let containerWidth = parseInt(document.querySelector("#container").clientWidth);
let containerHeigth = parseInt(document.querySelector("#container").clientHeight);

// random color generator
function ColorCode() {
    let makingColorCode = '0123456789ABCDEF';
    let finalCode = '#';
    for (let counter = 0; counter < 6; counter++) {
        finalCode =finalCode+ makingColorCode[Math.floor(Math.random() * 16)];
    }
    return finalCode;
}

function userInput(){
    let x = parseInt(prompt("How many squares per side?: "));
    if (x > 64) {
    alert(`please enter a number lower than 64`);
    userInput()
} else {
    createGrid(x)
}
}

//1) function that builds a grid in the container
function createGrid(x){
    for (let row = 0; row < x; row++){
        for (let col = 0; col < x; col++){
            let divs = document.createElement("div");
            divs.addEventListener("mouseover", () => divs.style.backgroundColor = ColorCode());
            divs.addEventListener("mouseout", () => divs.style.backgroundColor = ColorCode());
            divs.className ="grid";
            container.appendChild(divs)
        }
    }
}


// 2) Create a button, when clicked clears screen and then prompts user "How many squares per side?"

function clearGrid(){
    container.innerHTML = "";
}

function buttonPressed() {
    btn.classList.toggle("clicked")
    clearGrid();
    let userAnswer = userInput();
    return createGrid(userAnswer);
};

let btn = document.createElement("button")
btn.className = "button"
btn.textContent = "Reset"
btn.addEventListener("click", buttonPressed)
body.insertBefore(btn, body.children[0]);




userInput();





