let body = document.body;
let but = document.querySelector("button");
let isPurple = false;

alert("connected");

/*but.addEventListener("click", function() {
	if(isPurple) { body.style.backgroundColor = "white";} else {body.style.backgroundColor = "purple";} isPurple = !isPurple;})*/


but.addEventListener("click", function() {
	body.classList.toggle("purple");
})