let db = {
	authors: [
		{ id: "a101", name: "Sam", books: [] },
		{ id: "a102", name: "Ram", books: [] },
		{ id: "a103", name: "John", books: [] }
	],
	books: [
		{ id: "101", title: "Programming Scala", price: 12.34, authors: [], inStock: true},
		{ id: "102", title: "Thinking in Java", price: 10.25, authors: [], inStock: false  },
		{ id: "103", title: "Agile Rails", price: 20.25, authors: [], inStock: true  }
	]
}

let init = () => {
	let booksList = db.books;
	let authors = db.authors;
	booksList[0].authors = [authors[0], authors[1]];
	booksList[1].authors = [authors[2], authors[1]];
	booksList[2].authors = [authors[1], authors[2]];
	
	authors[0].books = [booksList[0]];
	authors[1].books = [booksList[0], booksList[1], booksList[2]]
	authors[2].books = [booksList[1], booksList[2]];
}

let resolvers = {
	
	Mutation: {
		deleteBook: (src, {title}) => {
			db.authors.forEach(author => {
				author.books = author.books.filter(it => it.title !== title);	
			});
			db.books = db.books.filter(it => it.title !== title);
			return true;
		},
		addBook: (src, {id, title, price, authors }) => {
			let book = { id, title, price };
			db.books.push(book);
			book.authors = [];
			authors.forEach(author => {
				let existingAuthor = db.authors.find(it => it.name === author);
				if(existingAuthor) {
					existingAuthor.books.push(book);
					book.authors.push(existingAuthor);
				}
				else {
					let authorInstance = { id: `a${id}`, name: author }
					authorInstance.books = [book]
					book.authors.push(authorInstance);
					db.authors.push(authorInstance);		
				}
			});
		
			return book;
		},
	},
	
	Query: {
		books: () => {
			return db.books;
		},
		book: (src, {id}) => {
			console.log(src);
			if(id) {
				return db.books.find(it => it.id === id);
			}
		},
		bookByTitle: (src, {title}) => {
			if(title) {
				return db.books.find(it => it.title === title);
			}
		},
		booksInStock: () => {
			return db.books.filter(it => it.inStock);
		},
		authors: () => db.authors,
		costliestBooks: (src, {price}) => {
			return db.books.filter(it => it.price > price);
		}
	}
}
init();
module.exports = resolvers;