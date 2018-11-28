const headingReducer = (state = 'Welcome to Redux Training', action) => {
	switch (action.type) {
	case "GET_HEADING":
		return action.payload;	
	default:
		return state;	
	}
}

export default headingReducer; 