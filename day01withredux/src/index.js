import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
	currentTime: '',
	currentTemperature: ''
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case "GET_TIME":
		return Object.assign({}, state, {
			currentTime: new Date().toString()
		});
	case "GET_TEMPERATURE":
		return Object.assign({}, state, {
			currentTemperature: Math.random() * 30
		});	
	default:
		return state;
	}
}

let store = createStore(reducer);


ReactDOM.render(<Provider store={store}> 
					<App /> 
				</Provider>, 
	document.getElementById('root'));

serviceWorker.unregister();
