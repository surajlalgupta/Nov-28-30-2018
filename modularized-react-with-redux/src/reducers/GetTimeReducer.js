const getTimeReducer = (state = '', action) => {
	switch (action.type) {
	case "GET_TIME":
		return new Date().toString()	
	default:
		return state;	
	}
}

export default getTimeReducer; 