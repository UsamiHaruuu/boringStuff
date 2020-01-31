import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Banner } from "./components/Banner/Banner";
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAODK8Pb4SdEY0ps3uPwFey0SLH4WyIBWc",
  authDomain: "firefly-tutorial.firebaseapp.com",
  databaseURL: "https://firefly-tutorial.firebaseio.com",
  projectId: "firefly-tutorial",
  storageBucket: "firefly-tutorial.appspot.com",
  messagingSenderId: "701289228352",
  appId: "1:701289228352:web:a89749ced1e215793817a5"
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const contactData = [
    {
      name: "Jane Bird",
      email: "jbird@aol.com",
      phone: "2223334444",
      lastPurchase: "Jan 1 2019",
      piecesBoughtYear: 2,
      piecesBoughtTotal: 4,
      status: true
    },
    {
      name: "Bob Marley",
      email: "bmarley@aol.com",
      phone: "2243335444",
      lastPurchase: "June 12 2018",
      piecesBoughtYear: 1,
      piecesBoughtTotal: 7,
      status: true
    },
    {
      name: "Josh Brown",
      email: "jbrown@google.com",
      phone: "1233489324",
      lastPurchase: "Jan 27 2019",
      piecesBoughtYear: 3,
      piecesBoughtTotal: 6,
      status: true
    },
    {
      name: "Lebron james",
      email: "ljames@google.com",
      phone: "2247289032",
      lastPurchase: "Feb 11 2019",
      piecesBoughtYear: 0,
      piecesBoughtTotal: 5,
      status: false
    }
  ];

  return (
    <div>
      <Banner />
      <MainPage contactData={contactData} />
    </div>
  );
};

export default App;
