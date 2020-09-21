import firebase from 'firebase';
// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDMA45g38CxLH4QmmdPskimXbXWVZW41EM',
    authDomain: 'to-leap-web.firebaseapp.com',
    databaseURL: 'https://to-leap-web.firebaseio.com',
    projectId: 'to-leap-web',
    storageBucket: 'to-leap-web.appspot.com',
    messagingSenderId: '1093912743972',
    appId: '1:1093912743972:web:e527de0ebae0aa27edc8b1',
    measurementId: 'G-Q6Q3F4DGKD',
};

const fire = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default fire;
