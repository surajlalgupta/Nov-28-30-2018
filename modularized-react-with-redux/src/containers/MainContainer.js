import Main from '../components/';
import { connect } from 'react-redux';
import  axios  from 'axios';


const mapStateToProps = (state) => {
	return {
		heading: state.heading,
		time: state.currentTime,
		temperature: state.currentTemperature
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchHeadingFromServer: () => {
			//redux-saga and redux-thunk
			axios.get("/data.txt").then(response => { 
				dispatch({ type: "GET_HEADING", payload: response.data });
			});		
		},
		getCurrentTime: () => dispatch({ type: "GET_TIME" }), 		getCurrentTemperature: () => dispatch({ type: "GET_TEMPERATURE" })
	}
} 

export default connect(mapStateToProps, mapDispatchToProps)(Main);