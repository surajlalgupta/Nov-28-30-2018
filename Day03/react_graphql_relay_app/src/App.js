import React from 'react';
//import BookList from './BookList'
import BookListPage from './BookListPage'
import CreateBook from './CreateBook'
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
		<div>
        	<h1>Book Store</h1><hr/>
			  <BrowserRouter>	
		      	<div>
					<Route exact path="/" component={BookListPage}/>
					<Route exact path="/add" component={CreateBook}/>
				</div>
			 </BrowserRouter>	
        </div>
    );
  }
}

// import {graphql, QueryRenderer} from 'react-relay';
// import environment from './Environment'

// export default class App extends React.Component {
//   render() {
//     return (
//       <QueryRenderer
//         environment={environment}
//         query={graphql`
//           query AppQuery {
// 			  books {
// 				  id, title, price
// 			  }
// 		  }
//         `}
//         variables={{}}
//         render={({error, props}) => {
//           if (error) {
// 			  console.log(error)
//             return <div>Error!</div>;
//           }
//           if (!props) {
//             return <div>Loading...</div>;
//           }
//           return <div>Name: {props.books[0].title}</div>;
//         }}
//       />
//     );
//   }
// }