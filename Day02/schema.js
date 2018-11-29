let schema = `
	type Author {
		id: ID!,
		name: String!
	}
	type Book {
		id: ID!,
		title: String,
		price: Float,
		authors: [Author]!
	}
	
	type Query {
		books: [Book],
		book(id: ID): Book
	}
	`;

module.exports = schema;