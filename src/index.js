import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';

import rootreducer from './reducers/index';
import './index.css';

const logger=({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action !== 'function')
  console.log("Action Type =  ",action.type);
  next(action);
}
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }
const secondmiddleware=function ({dispatch,getState}){
  return function (next){
    return function(action){
      console.log("this second middleware");
     next(action);
    }
  }
}
const store=createStore(rootreducer,applyMiddleware(logger,thunk));
export const storeContext=createContext();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <storeContext.Provider value={store}>
    <App store={store}/>
  </storeContext.Provider>
  </React.StrictMode>
);

