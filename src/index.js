import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './config';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Get environment variable from global object __app_env =>>>>>>>>>>>>
const { BUILD_DATE, VCS_REF, VERSION, API_URL, NODE_ENV } = config;
console.log(`NODE_ENV => ${NODE_ENV}; version => ${VERSION}; build_date => ${BUILD_DATE}; VCS_REF => ${VCS_REF}; API_URL => ${API_URL}`);
