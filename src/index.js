import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import App from './components/App';
import movies from './reducers/index'
import './index.css'

const store=createStore(movies);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

