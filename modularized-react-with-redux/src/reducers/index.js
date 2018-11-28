import getTemperatureReducer from './GetTemperatureReducer';
import getTimeReducer from './GetTimeReducer';
import headingReducer from './HeadingReducer';
import { combineReducers } from 'redux';

let reducers = combineReducers({
	heading: headingReducer,
	currentTime: getTimeReducer,
	currentTemperature: getTemperatureReducer
})

export default reducers;