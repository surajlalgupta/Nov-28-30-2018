let square =  (num) => new Promise((resolve, reject) => {
	setTimeout(() => {
		let result = num * num;
		console.log(`Square: ` + result);
		resolve(result);	
	}, 2000);
});

let increment = (num) => new Promise((resolve, reject) => {
	setTimeout(() => {
		let result = num + 1;
		console.log(`Increment: ${result}`);
		resolve(result);
	}, 3000);
});

let isEven = (num) => new Promise((resolve, reject) => {
	setTimeout(() => {
		let result = num % 2 == 0;
		console.log(`Is Even: ${result}`);
		resolve(result);	
	}, 2000);
});


let play =  async () => {
	await square(10)
		.then(response => increment(response))
		.then(response => isEven(response))
		.then(response => console.log(`Finally ${response}`))
		.catch(err => console.log(err));
	console.log("End of the program");
	
}
play();




	
	
	