import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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
const { build_date: buildDate, vcs_ref: git, digest_image: digestImage, version } = window.__app_env;
console.log(`version => ${version}; build date => ${buildDate}; image => ${digestImage}; git => ${git}`);
