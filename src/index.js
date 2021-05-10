import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'; //. same folder
import reportWebVitals from './reportWebVitals';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
//to handle async in middleware
import thunkMiddleware from 'redux-thunk';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';



//middleware, to be aplied on reduxApp
const logger = createLogger();

//combine all reducers into a root reducer
const rootReducer = combineReducers({ searchRobots, requestRobots})

//STORE using reducer to create that obj tree of the state
const store = createStore(rootReducer, 
  applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//PWA
serviceWorkerRegistration.register();

reportWebVitals();
