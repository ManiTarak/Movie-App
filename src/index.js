import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import { applyMiddleware } from 'redux';
import App from './components/App';
import rootreducer from './reducers/index'
import './index.css'

const logger=function ({dispatch,getState}){
  return function (next){
    return function(action){
      console.log("Action Type =  ",action.type);
      next(action);
    }
  }
}
const secondmiddleware=function ({dispatch,getState}){
  return function (next){
    return function(action){
      console.log("this second middleware");
     next(action);
    }
  }
}
const store=createStore(rootreducer,applyMiddleware(logger,secondmiddleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

