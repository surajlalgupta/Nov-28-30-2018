let arr1 = [ 
	{ num: 12, op: 'Square'},
	{ num: 32, op: 'Cube'}
]

//let arr2 = [...arr1];

//#1 Deep copy
let arr2 = JSON.parse(JSON.stringify(arr1));
arr2[0].num = 111;
console.log(arr1, arr2);


//#2 Deep copy
let arr3 = [];
arr1.forEach(it => arr3.push({...it}));
arr3[0].num = 211;
console.log(arr1, arr3);