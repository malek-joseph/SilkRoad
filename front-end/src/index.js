import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// we replaced the below import with the min to remove warning WARNING in ./node_modules/antd/dist/antd.css
// import "antd/dist/antd.css"
import 'antd/dist/antd.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/index.js'


// We separate the reduceres in a separate folder for reducers and index.js there will combine and control them.
const store = createStore(rootReducer, composeWithDevTools)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
    
    <Provider/>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
