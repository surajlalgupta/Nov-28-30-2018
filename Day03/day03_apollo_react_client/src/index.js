import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import  ApolloClient  from 'apollo-boost';
import gql from 'graphql-tag';

import { ApolloProvider } from 'react-apollo';

let client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
});

client.query({
	query: gql`{
		books{
			id, title, price
		}
	}`
}).then(response => console.log(response.data));

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));
serviceWorker.unregister();
