import React, { Component } from 'react';
import './App.css';

class Book extends Component {
	constructor(props) {
		super(props)
	}
  render() {
		let { book } = this.props;
		if(book) {
	      return (<div className="App">
			<h4>{book.title}, {book.price}, {book.inStock ? 'yes' : 'no'}</h4>
			<h5>Authors</h5>
			{book.authors.map(author => <p key={author.id}>{author.name}</p>)}
	      </div>)
		}
		else {
			return (<div></div>);
		}			
  }
}

export default Book;
