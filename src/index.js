
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Parse from 'parse'

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  'h2N3mnez0o8lx8d1wruJFKqMsapy0CCSmiGk0OO3', // This is your Application ID
  '6SMd5BpVty1wZQIMt0rhG03L7INNABB36s9GduB7' // This is your Javascript key
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
