const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDe3e6dYEf84hwPVYDn-9MXq2vYCz7tVHQ",
  authDomain: "test-6d8f0.firebaseapp.com",
  databaseURL: "https://test-6d8f0.firebaseio.com",
  projectId: "test-6d8f0",
  storageBucket: "test-6d8f0.appspot.com",
  messagingSenderId: "37179573805",
  appId: "1:37179573805:web:3bc1c1685e08c82c9f1aa4",
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var fireAuth = firebase.auth();
module.exports = { db, fireAuth };
