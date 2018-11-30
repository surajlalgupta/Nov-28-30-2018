// import React from 'react';
// import {graphql, QueryRenderer} from 'react-relay'
// import environment from './Environment'
//
//
// const BookListOldQuery = graphql`
//   query BookListOldQuery {
//     books {
//       id, title, price
//     }
//   }`
//
// export default class BookListOld extends React.Component {
//
// 	render() {
// 	    return (
// 	      <QueryRenderer
// 	        environment={environment}
// 	        variables={{}}
// 	        query={BookListOldQuery}
// 	        render={({error, props}) => {
// 	          if (error) {
// 	            return <div>{error.message}</div>
// 	          } else if (props) {
// 			  	  let { books } = props
// 			        return (<div>
// 			  		  <h1>List of Books</h1>
// 			  		  <ul>
// 			  		  {
// 			  		  	books.map(book => {
// 			  		  		return <li key={book.id}>{book.title}, {book.price}</li>
// 			  		  	})
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