let app = require("express")();
let { graphql, buildSchema } = require("graphql");
let graphqlHTTP = require("express-graphql");
let cors = require("cors");

let schema = buildSchema(`
	type Book {
		id: String,
		title: String,
		price: Float,
		authors: [String]
	}
	
	type Query {
		books: [Book],
		now: String,
		temperature: Float
	}
`)

let resolver = {
	books: () => {
		return [
			{ id: "101", title: "Programming Scala", price: 12.34, authors: ["A1", "A2"] },
			{ id: "102", title: "Thinking in Java", price: 10.25, authors: ["A3", "A4"]  },
			{ id: "103", title: "Agile Rails", price: 20.25, authors: ["A5", "A2"]  }
		];
	},
	now: () => new Date().toString(),
	temperature: () => Math.random() * 30
}	






app.use("/graphql", cors(), graphqlHTTP({
	schema,
	rootValue: resolver,
	graphiql: true
}))

app.get("/", (req, res) => {
	res.end("Hello GraphQL")
});

app.listen(4000);
console.log("Server started in 4000");