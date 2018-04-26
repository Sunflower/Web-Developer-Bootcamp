function isEven(num) {
	return num % 2 === 0;
}

function factorial(num) {
	if (num===0 || num===1) return 1;
	return num * factorial(num-1);
}

var kebabToSnake = function(kebab) {
	return kebab.replace(/-/g, '_');
}