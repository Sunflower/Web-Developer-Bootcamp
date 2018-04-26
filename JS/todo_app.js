let todos = []

let command = prompt("What would you like to do?");

while (command !== "quit") {
	if (command === "new") {
		let todo = prompt("Enter a new todo");
		todos.push(todo);
	}

	if (command === "delete") {
		let index = prompt("Enter index of todo item to delete");
		todos.splice(index, 1);
	}

	if (command === "list") {
		listTodos();
	}

	command = prompt("What would you like to do?");
}

function listTodos(){
	console.log("*******");
	todos.forEach(function(todo, index) {
		console.log(index + ": " + todo);
	})
	console.log("*******");
}