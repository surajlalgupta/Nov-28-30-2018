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


















