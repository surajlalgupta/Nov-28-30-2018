const getTemperatureReducer = (state = '', action) => {
	switch (action.type) {
	case "GET_TEMPERATURE":
		return Math.random() * 40;	
	default:
		return state;	
	}
}

export default getTemperatureReducer; 