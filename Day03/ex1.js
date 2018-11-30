//Callback HELL
let square = (num, callback1, callback2) => {
	setTimeout(() => {
		let result = num * num;
		console.log(`Square: ${result}`);
		callback1(result, callback2);
	}, 2000);
}

let increment = (num, callback) => {
	setTimeout(() => {
		let result = num + 1;
		console.log(`Increment: ${result}`);
		callback(result);
	},3000);
}

let print = (num) => {
	setTimeout(() => {
		console.log(`Result: ${num}`);
	}, 1000);
}

square(10, increment, print);


//Pass a number say 10
//square function (2 seconds)
//passes 100 to a increment function
//increment function (3 seconds) and returns 101
//Passes to a function print (1 second) and prints 101 in the console
