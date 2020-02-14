import React from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const firebaseConfig = {
  apiKey: "AIzaSyC-AdacrGfrEAuhqYatNGh0aYs0A_1_Axw",
  authDomain: "fanbase-d7da7.firebaseapp.com",
  databaseURL: "https://fanbase-d7da7.firebaseio.com",
  projectId: "fanbase-d7da7",
  storageBucket: "fanbase-d7da7.appspot.com",
  messagingSenderId: "1064289801186",
  appId: "1:1064289801186:web:9c69ad59a1eb9677725fbb",
  measurementId: "G-NJ9M57MCN9"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();
const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};
const SignIn = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
);
const LogOut = () => firebase.auth().signOut();
export { db, SignIn, LogOut };
