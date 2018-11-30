let { ApolloServer } = require("apollo-server");
let schema = require('./schema');


let resolvers = require('./resolvers');


const server = new ApolloServer({ typeDefs: schema, resolvers  });

server.listen(4000).then(() => {
	console.log('Server started');
});
	