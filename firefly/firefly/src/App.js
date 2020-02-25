import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Banner } from "./components/Banner/Banner";
import firebase from "firebase/app";
import "firebase/database";
import { db } from "./firebaseHelpers";
import "firebase/auth";
// import { firestoreUpdateAttr, firebaseReadAndWrite } from "./addDataHelper";
import AudiencePage from "./pages/AudiencePage";
import { Container } from "@material-ui/core";

const App = () => {
  let contactArr = [];

  const [user, setUser] = useState(undefined);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    //return Brian's buyers
    if (user) {
      db.collection("userCollections")
        .doc(`${user.uid}`)
        .collection("contacts")
        .get()
        .then(function(querySnapshot) {
          console.log(querySnapshot);
          querySnapshot.forEach(element => {
            contactArr.push(element.data());
          });
          setContacts(contactArr);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    }
  }, [user]);

  return (
    <div>
      <Banner user={user} />
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MainPage contacts={contacts} />}
          ></Route>
          <Route
            exact
            path="/business"
            render={() => (
              <p style={{ color: "white" }}>this page is under construction</p>
            )}
          ></Route>
          <Route
            exact
            path="/marketing"
            render={() => (
              <p style={{ color: "white" }}>this page is under construction</p>
            )}
          ></Route>
          <Route
            exact
            path="/audience"
            render={() => <AudiencePage contacts={contacts} />}
          ></Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
