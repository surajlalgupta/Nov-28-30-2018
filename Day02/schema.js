let schema = `
	type Author {
		id: ID!,
		name: String!,
		books: [Book]!
	}
	type Book {
		id: ID!,
		title: String,
		price: Float,
		authors: [Author]!,
		inStock: Boolean
	}
	
	type Mutation {
		addBook(id: ID, title: String, price: Float, authors: [String]): Book
	}
	
	type Query {
		books: [Book],
		book(id: ID ): Book,
		booksInStock: [Book],
		authors: [Author],
		bookByTitle(title: String): Book,
		costliestBooks(price: Float): [Book]
	}
	`;

module.exports = schema;