import React from 'react';
import {graphql, QueryRenderer} from 'react-relay'
import environment from './Environment'
import BookList from './BookList'
import { Link } from 'react-router-dom';


const BookListPageQuery = graphql`
  query BookListPageQuery{
      allBooks(first:1,after:"sadsd") @connection(key:"BookListPage_allBooks"){
        edges {
 		 cursor
          node {
        	  id,
			  title,
			  price
          }
        }
      }
 }`

 // query BookListPageQuery{
 //       ...BookList_allBooks
 //
 //  }
 // fragment BookList_allBooks on Query {
 //      allBooks(first:1,after:"sadsd"){
 //        edges {
 // 		 cursor
 //          node {
 //            ...Book_book
 //          }
 //        }
 //      }
 //    }
 //  fragment Book_book on Book {
 //        id,
 //        title,
 // 	   price
 //      }
export default class BookListPage extends React.Component {

	render() {
	    return (
		  <div>
			<Link to='/add'>Add Book</Link><br/>	
	      <QueryRenderer
	        environment={environment}
	        query={BookListPageQuery}
	        render={({error, props}) => {
	          if (error) {
	            return <div>{error.message}</div>
	          } else if (props) {
				  console.log(props.allBooks)
			  		return (<div>
						<h1>Cool</h1>
					</div>)
	          }
	          return <div>Loading</div>
	        }}
	      />
		  </div>	
	    )
	  }
 }