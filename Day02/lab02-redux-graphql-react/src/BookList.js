import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class BookList extends Component {
  componentDidMount() {
		this.props.fetchBooks();
  }
  
  getBooks() {
	  let {books} = this.props;
	  let booksArr = [];
	  if(books) {
		  booksArr = books.map(book => (<li key={book.id}>
			  {book.title}, ({book.price}), In Stock: {book.inStock ? 'Yes' : 'No'}
			  </li>));
	  }
	  return <ul>{booksArr}</ul>;
  }
  
  render() {
    return (
      <div>
		<p style={{color: 'red'}}>{this.props.error}</p>
		{this.getBooks()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
	return {
		books: state.books,
		error: state.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchBooks: () => {
			axios.post('http://localhost:4000/graphql', { 
				query: GET_BOOKS_QUERY 
			}).then(response => dispatch({type: 'GET_BOOKS', payload: response}))
			.catch(err => dispatch({type: 'ERROR_LOADING_BOOKS'}));
		}
	}
}

const GET_BOOKS_QUERY = `{
	books {
		id, title, price, inStock
	}
}`;


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
