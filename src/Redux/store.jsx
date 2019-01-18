import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import * as reducer from './reducer'
/*=================
    store.jsx
  中央数据处理器
==================*/
var store = createStore(
    combineReducers(reducer),
    applyMiddleware(logger),
    applyMiddleware(thunk),
);
export default store;
