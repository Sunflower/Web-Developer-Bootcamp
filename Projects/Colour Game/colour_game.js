let colours = generateRandomColours(6);
function generateRandomColours(num) {
    let arr = [];

    for (let i=0; i < num; i++) {
        arr.push(getRandomColour());
    }

    return arr;
}

function getRandomColour() {
    r = Math.floor(Math.random() * 256).toString();
    g = Math.floor(Math.random() * 256).toString();
    b = Math.floor(Math.random() * 256).toString();

    return "rgb(" + r + ", " +  g + ", " + b + ")";
}


let squares = document.querySelectorAll(".square");
let pickedIndex = pickIndex();
let pickedColour = colours[pickedIndex];

function pickIndex() {
    return Math.floor(Math.random() * colours.length);
}


let colourDisplayed = document.getElementById("colourDisplayed");
colourDisplayed.textContent = pickedColour;

let messageDisplay = document.querySelector("#message");

for (let i = 0; i < squares.length; i++) {
    // add initial colours
    addInitialColour(i);

    // add click listeners to squares
    addClickListeners(i);
}


function addInitialColour(i) {
    squares[i].style.backgroundColor = colours[i];
}

function addClickListeners(i) {
    squares[i].addEventListener("click", function() {
        let clickedColour = this.style.backgroundColor;

        if (clickedColour === pickedColour) {
            messageDisplay.textContent = "Correct!";
            changeColours(pickedColour);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}

function changeColours(colour) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
}
