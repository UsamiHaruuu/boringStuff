import React from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/firestore";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

firebase.initializeApp({
  apiKey: "AIzaSyC-AdacrGfrEAuhqYatNGh0aYs0A_1_Axw",
  authDomain: "fanbase-d7da7.firebaseapp.com",
  projectId: "fanbase-d7da7"
});

var db = firebase.firestore();

const SignIn = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
);
const LogOut = () => firebase.auth().signOut();
export { db, SignIn, LogOut };
