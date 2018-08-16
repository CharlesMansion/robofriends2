import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.css';
import 'tachyons';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
import registerServiceWorker from './registerServiceWorker';

const rootreducer = combineReducers({ searchRobots, requestRobots})
const logger = createLogger();
const store = createStore(rootreducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
