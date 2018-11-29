let { graphql, buildSchema } = require('graphql');

//Creating a table
let schema = buildSchema(`
	type Query {
		now: String,
		temperature: Float,
		boring: Boolean,
		hello: String,
		bye: String
	}	
`)
	
//Building the resolver for queries or populating the table	
//You can go to RESTful service or DB or MongoDB or Files	
let dataForSchema = {
	now: () => new Date().toString(),
	temperature: () => Math.random() * 100,
	boring: () => true,
	hello: () => "Hello World"		
}	

let query1 = `{ now, temperature }`
let query2 = `{temperature}`
let query3 = `{now}`
let query4 = `{ temperature, now, boring }`
let query5 = `{bye}`

graphql(schema, query1, dataForSchema)
	.then(response => console.log(response.data));