import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from './Environment'

const mutation = graphql`
  mutation CreateBookMutation($input: BookInput!) {
    createBook(book: $input)
  }
`

  const optimisticResponse = {
    "data": {
      "createBook": "Done"
    }
  }  

export default (title, price, successCallback,errorCallback) => {
  const variables = {
    input: {
	  id: Math.round(Math.random() * 100000),
      title,
      price,
	  authors: []	
    }
  }

  commitMutation(
    environment,
    {
      mutation,
	  optimisticResponse,  	
      variables,
		onCompleted: (response,errors) => {
			if(errors)
				errorCallback(errors);
		    else
				successCallback()
      },
      onError: (err) => {console.log(err);errorCallback(err.message)}
    },
  )
}
