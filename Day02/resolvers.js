let db = {
	authors: [
		{ id: "a101", name: "Sam" },
		{ id: "a102", name: "Ram" },
		{ id: "a103", name: "John" }
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
}

let resolvers = {
	books: () => {
		return db.books;
	},
	book: ({id}) => {
		if(id) {
			return db.books.find(it => it.id === id);
		}
	},
	bookByTitle: ({title}) => {
		if(title) {
			return db.books.find(it => it.title === title);
		}
	},
	booksInStock: () => {
		return db.books.filter(it => it.inStock);
	},
	authors: () => db.authors,
	costliestBooks: ({price}) => {
		return db.books.filter(it => it.price > price);
	}
}
init();
module.exports = resolvers;