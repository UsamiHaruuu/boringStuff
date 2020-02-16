import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Banner } from "./components/Banner/Banner";
import firebase from "firebase/app";
import "firebase/database";
import { db } from "./firebaseHelpers";
import "firebase/auth";

const App = () => {
  const [contactData, setContactData] = useState({});
  const [galleryData, setGalleryData] = useState({});
  let contacts = Object.values(contactData);
  let galleries = Object.values(galleryData);
  const [user, setUser] = useState(undefined);
  let contactArr = [];
  let galleryArr = [];
  let tableData = {};
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);
  if (user) console.log(user.uid);

  useEffect(() => {
    //return Brian's buyers
    if (user) {
      db.collection("buyers")
        .where("contactOfWhom", "array-contains", `${user.uid}`)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            contactArr.push(doc.data());
          });
          setContactData(contactArr);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
      db.collection("galleries")
        .where("contactOfWhom", "array-contains", `${user.uid}`)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            galleryArr.push(doc.data());
          });
          setGalleryData(galleryArr);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    }
  }, [user]);
  return (
    <div>
      <Banner user={user} />
      <MainPage contactData={contacts} galleryData={galleries} />
    </div>
  );
};

export default App;
