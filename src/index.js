import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";

 const firebaseConfig = {
    apiKey: "AIzaSyDq37eIk0OHSDWXQxiIamwCRTgjKS80lfE",
    authDomain: "reast-api-b141b.firebaseapp.com",
    databaseURL: "https://reast-api-b141b.firebaseio.com",
    projectId: "reast-api-b141b",
    storageBucket: "reast-api-b141b.appspot.com",
    messagingSenderId: "68268595687",
    appId: "1:68268595687:web:4fedea77269e1eb4efc542"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();