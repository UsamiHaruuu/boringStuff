import React from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/firestore";
import 'firebase/storage';
require("firebase/functions");
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
  databaseURL: "https://fanbase-d7da7.firebaseio.com",
  projectId: "fanbase-d7da7",
  storageBucket: "fanbase-d7da7.appspot.com",
  messagingSenderId: "1064289801186",
  appId: "1:1064289801186:web:9c69ad59a1eb9677725fbb",
  measurementId: "G-NJ9M57MCN9"

});
var db = firebase.firestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
var storageRef = storage.ref();


const uploadFile = (user, file) => {
  let task;
  if (user) {
    task = storageRef.child(user.uid).child('images').put(file).then(snap => {
      console.log("uploaded!")
    }).catch(error => console.log(error.code))
    task.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function (error) {
        switch (error.code) {
          case 'storage/unauthorized':
            break;

          case 'storage/canceled':
            break;

          case 'storage/unknown':
            break;
        }
      }, function () {
        task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
        });
      });
  }
  return task;
}
const pauseUpload = (uploadTask) => uploadTask.pause()
const resumeUpload = (uploadTask) => uploadTask.resume()
const cancelUpload = (uploadTask) => uploadTask.cancel()
const downloadFile = (user, fileName) => {
  storageRef.child(`images/${fileName}`).getDownloadURL().then(url => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function (event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  }).catch(error => console.log(error.code))
}
const listFiles = (user) => {
  var listRef = storageRef.child(user.uid);
  listRef.listAll.then(res => {
    res.items.forEach(itemRef => {
      console.log(itemRef)
    })
  })
}
const SignIn = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
);
const LogOut = () => firebase.auth().signOut();



export { db, SignIn, LogOut, storageRef, downloadFile };
