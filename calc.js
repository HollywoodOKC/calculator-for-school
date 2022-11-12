const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');

	mathSymbol = tokens[1];
	num1 = Number(tokens[0]);
	num2 = Number(tokens[2]);

	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

	switch (mathSymbol) {
		case "+":
			console.log(num1 + num2);
			break;
		case "*":
			console.log(num1 * num2);
			break;
		case "/":
			console.log(num1 / num2);
			break;
		case "%":
			console.log(num1 % num2);
			break;
		case "**":
			console.log(num1 ** num2);
			break;
		default:
			console.log("No Number Here!")
	}

	// This line closes the connection to the command line interface.
	reader.close()
});
