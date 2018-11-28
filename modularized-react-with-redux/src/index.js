import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './css/App.css';

import { createStore } from 'redux';
import reducers from './reducers/';
import { Provider } from  'react-redux';

let store = createStore(reducers);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
