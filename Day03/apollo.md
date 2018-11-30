## Apollo Server

* sudo npm install --save apollo-server graphql
* Resolvers need the following modification

```javascript
	let resolvers = [
		Mutation: {
			foo: (src, args) => {},
		},
		Query: {
			item: (src, args) => {}
		}
	]
```

## Apollo Client

* create-react-app 
* sudo npm install --save graphql apollo-boost react-apollo
* apollo-boost contains apollo-client starter libraries, http libraries