let app = require("express")();
let { graphql, buildSchema } = require("graphql");
let graphqlHTTP = require("express-graphql");
let cors = require("cors");

let schema = buildSchema(require("./schema"))
let resolver = require("./resolvers");



app.use("/graphql", cors(), graphqlHTTP({
	schema,
	rootValue: resolver,
	graphiql: true
}))

app.get("/", (req, res) => {
	res.sendFile("index.html", { root: __dirname});
});

app.listen(4000);
console.log("Server started in 4000");