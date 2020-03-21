import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import firebase from 'firebase'
// import * as serviceWorker from './serviceWorker';
// apiKey: "AIzaSyALQqPo3ZYGgLWhGWNl4r1-DpdHSLTwIm4",
// authDomain: "webcrislaez-58653.firebaseapp.com",
// databaseURL: "https://webcrislaez-58653.firebaseio.com",
// projectId: "webcrislaez-58653",
// storageBucket: "webcrislaez-58653.appspot.com",
// messagingSenderId: "177846152420",
// appId: "1:177846152420:web:b21c4de91064af557110f1"
firebase.initializeApp({
    apiKey: "AIzaSyAz3-bdTEstYnt_BscQ_RBwlG7bppaLKrs",
    authDomain: "projectodatos.firebaseapp.com",
    databaseURL: "https://projectodatos.firebaseio.com",
    projectId: "projectodatos",
    storageBucket: "projectodatos.appspot.com",
    messagingSenderId: "731572375265",
    appId: "1:731572375265:web:33577829d783474db731a0",
    measurementId: "G-H749EBEDRX"
});
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
