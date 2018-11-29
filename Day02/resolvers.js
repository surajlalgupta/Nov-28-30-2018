let db = {
	authors: [
		{ id: "a101", name: "Sam" },
		{ id: "a102", name: "Ram" },
		{ id: "a103", name: "John" }
	],
	books: [
		{ id: "101", title: "Programming Scala", price: 12.34, authors: []},
		{ id: "102", title: "Thinking in Java", price: 10.25, authors: []  },
		{ id: "103", title: "Agile Rails", price: 20.25, authors: []  }
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
	book: (args) => {
		let id = args.id;
		let book = db.books.find(it => it.id === id);
		return book;
	}
	
}
init();
module.exports = resolvers;