# GraphQL

* Book (isbn, title, price, authors, year, img, toc)


* GET  http://catalog/books { all }

* For mobile, you want the books { title, price, authors }


## 1

* GET http://catalog/books?attributes=title, price, authors
* GET http://catalog/books 

* Search a book by passing title alone
* Search a book by passing title and price
* Search a book by passing year of publication

* One service and differentiate based on the query parameters
* Resort to conditionals in the server side


## 2

* GET http://catalog/books {...all}
* GET http://catalog/m/books { title, price, author}

* GET http://catalog/books/search/:title
* GET http://catalog/books/search/:title/:price
* GET http://catalog/books/search/:title/:price/:year
* GET http://catalog/books/search/:year


## Setting up GraphQL

* sudo npm init
* sudo npm install --save graphql


## Setting up GraphQL Server

* Install express, graphql, express-graphql, cors


### Fragments

```javascript
{
  expensive: costliestBooks(price: 15) {
   ...bookFields
  },
  
  all: books {
    ...bookFields
  }
  
  authors {
    name
  }
}
fragment bookFields on Book {
  title, price, authors {
    name
  }
}
```

### Variables

```javascript
  query findBook($bookId: ID, $title: String) {
    bookById: book(id: $bookId) {
    	title, price
  	}
    bookByTitle(title: $title) {
      id, price
    }
  }
  
  //Variables
  {
    "bookId": "101",
    "title" : "Agile Rails"
  }
```



### Mutation

```javascript
	mutation {
	  addBook(id: "106", title: "Inferno", price: 111.23, authors: ["Mary"]) {
	    id, title, price, authors {
	      name
	    }
	  }
	}
```












