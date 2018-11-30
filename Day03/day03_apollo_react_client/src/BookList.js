import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';



class BookList extends Component {
  render() {
    return (
      <Query query={BOOKS_QUERY}>
		{ ({loading, error, data}) => {
			if(loading) return <p>Loading books</p>;
			if(error) return <h4>Error loading books</h4>;
			if(data) {
				return data.books.map(book => <p key={book.id}>{book.title}, {book.price}</p>);
			}
		}}	
	  </Query>
    );
  }
}

const BOOKS_QUERY = gql`{
	books {
		id, title, price
	}
}`;

export default BookList;
