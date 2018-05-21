let numSqrs = 6;
let colours = [];
let pickedColour = "";
let squares = document.querySelectorAll(".square");
let h1 = document.querySelector("h1");
let colourDisplayed = document.getElementById("colourDisplayed");
let resetButton = document.querySelector("#reset");
let messageDisplay = document.querySelector("#message");
let easyButton = document.querySelector("#easyBtn");
let hardButton = document.querySelector("#hardBtn");
let modeButtons = document.querySelectorAll(".mode");


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

function pickIndex() {
    return Math.floor(Math.random() * colours.length);
}

function resetGame() {
    colours = generateRandomColours(numSqrs);
    pickedColour = colours[pickIndex()];
    for (let i = 0; i < squares.length; i++) {
        // add initial colours
        addInitialColour(i);

        // add click listeners to squares
        addClickListeners(i);
    }
    h1.style.backgroundColor = "steelblue";
    colourDisplayed.textContent = pickedColour;
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";
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
            resetButton.textContent = "Play Again!";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColours(colour) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
    h1.style.backgroundColor = colour;
}

function setUpModeListeners() {
    for (let i=0; i<modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSqrs = 3 : numSqrs = 6;

            resetGame();

            for (let i = 0; i < squares.length; i++) {
                   if (colours[i]) {
                       squares[i].style.background = colours[i];
                       squares[i].style.display = "block";
                   } else {
                       squares[i].style.display = "none";
                   }
               }
        });
    }
}

function initGame() {
    resetButton.addEventListener("click", function() {
        resetGame();
    });

    setUpModeListeners()

    resetGame();
}

initGame();
