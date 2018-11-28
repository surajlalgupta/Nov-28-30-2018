import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

const initialState = {
	currentTime: 'Click the button to get the current time'
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case "GET_TIME":
		return Object.assign({}, state, {
			currentTime: new Date().toString()
		});
	default:
		return state;
	}
}

let store = createStore(reducer);


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
