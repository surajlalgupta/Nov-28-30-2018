import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay'

class Book extends React.Component {
	
	render() {
		let { book } = this.props
		return (<li id={`book_p_${book.id}`}>
			{book.title}, ({book.price}$)
		</li>)	
	} 
 }
 
 export default createFragmentContainer(
   Book,
   graphql`
     # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
     fragment Book_book on Book {
       id,
       title,
	   price
     }
   `
 )