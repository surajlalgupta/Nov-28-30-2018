import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query, refetch } from 'react-apollo';
import Book from './Book';


class BookList extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
		  idOfTheBookToBeFetched: ''
	  }		
  }	
  bookClicked(id) {
	this.setState({
		idOfTheBookToBeFetched: id
	})	
  }
  
  showBooksList() {
	  this.setState({idOfTheBookToBeFetched: ''});
  }	
  
  reload() {
	  refetch();
  }
  
  render() {
	  if(this.state.idOfTheBookToBeFetched === '') {
	      return (
	        <Query query={BOOKS_QUERY} pollInterval={1500000}>
	  		{ ({loading, error, data, refetch}) => {
	  			if(loading) return <p>Loading books</p>;
	  			if(error) return <h4>Error loading books</h4>;
	  			if(data) {
	  				return (<div>
						<button onClick={() => refetch()}>Reload</button><br/>
						{
							data.books.map(book => <p onClick={this.bookClicked.bind(this, book.id)} key={book.id}>{book.title}, {book.price}</p>)
						}
					</div>);
	  			}
	  		}}	
	  	  </Query>
	      );	
	  }
	  else {
	  	return (<Query query={BOOK_DETAILS_QUERY} variables={{id: this.state.idOfTheBookToBeFetched}}>
	  		{ ({loading, error, data}) => {
	  			if(loading) return <p>Loading book details</p>;
	  			if(error) return <h4>Error loading book details</h4>;
	  			if(data) {
					let {book} = data;
	  				return (<div>
						<button onClick={this.showBooksList.bind(this)}>Show books list</button>
						<Book book = {book}/>
						</div>);
	  			}
	  		}}	
	  	  </Query>);
	  }  
    
  }
}

const BOOKS_QUERY = gql`{
	books {
		id, title, price, inStock, 
		authors { 
			id, 
			name
		}
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
