//Create an arrow function called now that displays the current time

const now = () => new Date().toString();
console.log(now());

//Create two arrays arr1=[1, 2] and arr2 = [3, 4] and concatenate them using spread operator
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr = [...arr1, ...arr2];
console.log(arr);
//console.log(arr1.concat(arr2));

//Create a person object with name and age properties.
//Extract the name and age out using destructuring syntax

let person = { name: 'Sam', age: 12, address: { city: 'Chennai'} };
//let name = person.name;
//let age = person.age;
let {name, age} = person;
console.log(name, age);

//Copy person to create another obj say person2
//Shallow copy
let person2 = Object.assign({}, person, { 
	address: {}
});
person2.name = 'Ram';
person2.address.city = "Bangalore";
console.log(person, person2);
let person3 = {...person};
console.log("person3", person3);
console.log("Hello");


let car1 = { model: "BMW", color: "Black" }
let car2 = Object.assign({}, car1, { color: "White" });
console.log(car1, car2);







