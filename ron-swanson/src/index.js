//TECH
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
//STYLING
import './index.css';
//COMPS & HELPERS & STORE
import App from './App';
import reducer from "./store/reducer";


const store = createStore(reducer, applyMiddleware(logger, thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


