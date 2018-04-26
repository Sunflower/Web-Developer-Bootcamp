var correctNum = 39;

function p2N(string) {
	return Number(prompt(string));
}

var guess = p2N("Guess my number!");


while (guess !== correctNum) {
	if (guess > correctNum) guess = p2N("Too high! Guess again!");
	else guess = p2N("Too low! Guess again!");
}

alert("Correctamundo!");


// For loop exercise
for(let i = 0; i < 11; i++) console.log(i);