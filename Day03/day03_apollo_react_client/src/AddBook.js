import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';


class AddBook extends Component {
  constructor(props) {
	  super(props);
  }	
  render() {
	  return <Mutation mutation={ADD_BOOK_MUTATION} 
	  update={(cache, { data: { addBook } }) => {
        const { books } = cache.readQuery({ query: GET_BOOKS_QUERY });
        cache.writeQuery({
          query: GET_BOOKS_QUERY,
          data: { books: books.concat([addBook]) }
        });
      }}>
		  {(addBook, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addBook({ variables: { id: this.id.value, title: this.title.value, price: parseFloat(this.price.value), authors: this.authors.value.split(",") } });
            }}
          >
            <input ref={node => { this.id = node }} placeholder="ID"/>
			<input ref={node => { this.title = node }} placeholder="Title"/>
			<input ref={node => { this.price = node }} placeholder="Price"/>
			<input ref={node => { this.authors = node }} placeholder="Author, Author"/>
            <button type="submit">Add Book</button>
          </form>
        </div>
      )}
    </Mutation>
  }
}

const GET_BOOKS_QUERY = gql`{
	books {
		id, title, price, inStock, authors { id, name }
	}
}`;

const ADD_BOOK_MUTATION = gql`
	mutation addBook($id: ID, $title: String, $price: Float, $authors: [String]) {
  	  	addBook(id: $id, title:$title, price: $price, authors: $authors) {
			id, title, price, authors {id, name, books}    
  		}
}`;

export default AddBook;
