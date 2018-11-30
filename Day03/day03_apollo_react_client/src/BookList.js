import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';



class BookList extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
		  bookToBeFetched: ''
	  }		
  }	
  bookClicked(id) {
	this.setState({
		bookToBeFetched: id
	})	
  }
  
  showBooksList() {
	  this.setState({bookToBeFetched: ''});
  }	
  render() {
	  if(this.state.bookToBeFetched === '') {
	      return (
	        <Query query={BOOKS_QUERY}>
	  		{ ({loading, error, data}) => {
	  			if(loading) return <p>Loading books</p>;
	  			if(error) return <h4>Error loading books</h4>;
	  			if(data) {
	  				return data.books.map(book => <p onClick={this.bookClicked.bind(this, book.id)} key={book.id}>{book.title}, {book.price}</p>);
	  			}
	  		}}	
	  	  </Query>
	      );	
	  }
	  else {
	  	return (<Query query={BOOK_DETAILS_QUERY} variables={{id: this.state.bookToBeFetched}}>
	  		{ ({loading, error, data}) => {
	  			if(loading) return <p>Loading book details</p>;
	  			if(error) return <h4>Error loading book details</h4>;
	  			if(data) {
					let {book} = data;
	  				return (<div>
						<button onClick={this.showBooksList.bind(this)}>Show books list</button>
						<h4>{book.title}, {book.price}, {book.inStock ? 'yes' : 'no'}</h4>
						<h5>Authors</h5>
						{book.authors.map(author => <p key={author.id}>{author.name}</p>)}
						</div>);
	  			}
	  		}}	
	  	  </Query>);
	  }  
    
  }
}

const BOOKS_QUERY = gql`{
	books {
		id, title, price
	}
}`;

const BOOK_DETAILS_QUERY = gql`
	query findBookDetail($id: ID) {
		book(id: $id) {
			id,
			title,
			price,
			inStock,
			authors {
				id,
				name
			}
		}
}`;










export default BookList;
