import React from 'react';
import {graphql, createFragmentContainer, createPaginationContainer} from 'react-relay'
import Book from './Book'

class BookList extends React.Component {
	loadMore(){
		
	}
	render() {
		let { all } = this.props
		if(this.props.all != null){
		    return (
			  <div>
		  		  <h1>List of Books</h1>
		  		  <ul>
		  		  {
					  all.edges.map(({node},index) => 
		  		  		<Book book={node}/>
		  		  	)
		  		  }
		  		  </ul><br/>
				  	<div>
				  		<div onClick={this.loadMore.bind(this)}>Load More...</div>
				  	</div>
				 </div>) 
		}
		else{
			return (<div>
		  		  <h1>List of Books</h1>
			</div>)
		}
	    
	  }
 }
 
 export default createFragmentContainer(BookList, graphql`
   fragment BookList_all on Query {
     allBooks(first:1,after:"sadsd"){
       edges {
		 cursor
         node {
			 id,
       	  	title,
	   	  	price
         }
       }
     }
   }
 `)
 
 // export default createPaginationContainer(BookList,
 //   graphql`
 //       fragment BookList_allBooks on Query {
 //         allBooks(
 //           first: 1,
 //           after: "ddfsdf",
 //         ) @connection(key: "BookList_allBooks") {
 //           edges {
 // 			 cursor
 //             node {
 //               ... Book_book
 //             }
 //           }
 //           pageInfo {
 //             hasNextPage
 //             hasPreviousPage
 // 			 endCursor
 // 			 startCursor
 //           }
 //         }
 //       }
 //     `,
 //   {
 //     direction: 'forward',
 //     query: graphql`
 //       query BookListForwardQuery{
 //           ...BookList_allBooks
 //       }
 //     `,
 //     getConnectionFromProps(props) {
 // 	   console.log("getConnectionFromProps",props);
 //       return props.allBooks
 //     },
 //     getFragmentVariables(previousVariables, totalCount) {
 // 		 console.log("getFragmentVariables",previousVariables,totalCount);
 //       return {
 //         ...previousVariables
 //       }
 //     },
 //     getVariables(props, paginationInfo, fragmentVariables) {
 // 		console.log("getVariables",paginationInfo,fragmentVariables);
 //       return {
 //         first: paginationInfo.first,
 //         after: paginationInfo.after,
 //       }
 //     },
 //   }
 // )