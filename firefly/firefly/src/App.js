import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Banner } from "./components/Banner/Banner";
import firebase from "firebase/app";
import "firebase/database";
import { db } from "./firebaseHelpers";
import "firebase/auth";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};
const App = () => {
  const [contactData, setContactData] = useState({});
  var contacts = Object.values(contactData);
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const handleData = snap => {
      console.log(snap.val);
      if (snap.val()) {
        setContactData(snap.val());
      }
    };
    db.on("value", handleData, error => alert(error));
    return () => {
      db.off("value", handleData);
    };
  }, []);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);
  return (
    <div>
      <Banner user={user} />
      <MainPage contactData={contacts} />
    </div>
  );
};

export default App;
