// import React from 'react';
// import {graphql, QueryRenderer} from 'react-relay'
// import environment from './Environment'
// import Book from './Book'
//
// const BookListQuery = graphql`
//   query BookListQuery {
//    books {
//    	... Book_book, authors{id}
//    }
//   }`
//
// export default class BookList extends React.Component {
//
// 	render() {
// 	    return (
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
// 			  		  </ul>
// 			  	  </div>)
// 	          }
// 	          return <div>Loading</div>
// 	        }}
// 	      />
// 	    )
// 	  }
//  }