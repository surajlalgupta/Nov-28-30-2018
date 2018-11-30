// import React from 'react';
// import {graphql, QueryRenderer} from 'react-relay'
// import environment from './Environment'
// import Book from './Book'
// import { Link } from 'react-router-dom';
//
// const BookListQuery = graphql`
//   query BookListQuery {
//    books {
//    	... Book_book, authors{id}
//    }
//   }`
//
// export default class BookList extends React.Component {
// 	loadMore(){
//
// 	}
// 	render() {
// 	    return (
// 		  <div>
// 			<Link to='/add'>Add Book</Link><br/>
// 	      <QueryRenderer
// 	        environment={environment}
// 	        variables={{}}
// 	        query={BookListQuery}
// 	        render={({error, props}) => {
// 	          if (error) {
// 	            return <div>{error.message}</div>
// 	          } else if (props) {
// 			  	  let { books } = props
// 			        return (<div>
// 			  		  <h1>List of Books</h1>
// 			  		  <ul>
// 			  		  {
// 			  		  	books.map(book =>
// 			  		  		<Book book={book}/>
// 			  		  	)
// 			  		  }
// 			  		  </ul><br/>
// 					  	<div>
// 					  		<div onClick={this.loadMore.bind(this)}>Load More...</div>
// 					  	</div>
// 			  	  </div>)
// 	          }
// 	          return <div>Loading</div>
// 	        }}
// 	      />
// 		  </div>
// 	    )
// 	  }
//  }