let player1 = document.querySelector("#p1");
let player2 = document.getElementById("p2");
let reset = document.querySelector("#re");

let p1Score = 0;
let p2Score = 0;
let p1ScoreHTML = document.querySelector("#p1Score");
let p2ScoreHTML = document.querySelector("#p2Score");

let maxScore = parseInt(document.querySelector("#maxScore").textContent);
let gameOver = false;

player1.addEventListener("click", function() {
	if (gameOver) {return;}
	p1Score++;
	updateScores();
});

player2.addEventListener("click", function() {
	if (gameOver) {return;}
	p2Score++;
	updateScores();
});


function updateScores() {
	p1ScoreHTML.textContent = p1Score;
	p2ScoreHTML.textContent = p2Score;
	if (p1Score >= maxScore) {
		setGameOver(p1ScoreHTML);
	}
	if (p2Score >= maxScore) {
		setGameOver(p2ScoreHTML);
	}
}

function setGameOver(pElem) {
	pElem.classList.add("winner");
	gameOver = true;
}

reset.addEventListener("click", resetGame);

function resetGame() {
	p1Score = 0;
	p2Score = 0;
	p1ScoreHTML.classList.remove("winner");
	p2ScoreHTML.classList.remove("winner");
	updateScores();
	gameOver = false;
}

let numInput = document.querySelector("input[type='number']");

numInput.addEventListener("change", function(){
	maxScore = parseInt(this.value);
	document.querySelector("#maxScore").textContent = maxScore;
	resetGame();
}); 