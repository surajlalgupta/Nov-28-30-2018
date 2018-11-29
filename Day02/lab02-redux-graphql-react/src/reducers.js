const initialState = {
	books: [],
	error: ''
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
	case "ERROR_LOADING_BOOKS":
		let errorState = Object.assign({}, state, {
			books: [],
			error: 'Error Loading books from server.'
		});
		return errorState;
	case "GET_BOOKS":
		let {books} = action.payload.data.data;
		let newState = Object.assign({}, state, {
			books
		});
		return newState;

	default:
		return state;	
	}
}

export default reducer;