import { db } from "./firebaseHelpers";
const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
export const firestore = () => {
  db.collection("buyers")
    .doc(uuidv4())
    .set({
      name: "Jane Bird ",
      email: "jbird@aol.com",
      phone: 222333444,
      lastPurchase: "Jan 1 2019",
      piecesBoughtYear: 2,
      piecesBoughtTotal: 4,
      boughtFromWhom: ["gkVgiBvx4OXWEtLtQkne0ICgrMm2"]
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  db.collection("galleries")
    .doc(uuidv4())
    .set({
      name: "Bob Marley",
      email: "bmarley@aol.com",
      phone: 2243335444,
      lastPurchase: "June 12 2018",
      piecesBoughtYear: 1,
      piecesBoughtTotal: 7,
      status: true,
      location: "WA"
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  db.collection("galleries")
    .doc(uuidv4())
    .set({
      name: "Lebron james",
      email: "ljames@google.com",
      phone: 2247289032,
      lastPurchase: "Feb 11 2019",
      piecesBoughtYear: 0,
      piecesBoughtTotal: 5,
      status: false,
      location: "LA"
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  db.collection("buyers")
    .doc(uuidv4())
    .set({
      name: "Josh Brown",
      email: "jbrown@google.com",
      phone: 1233489324,
      lastPurchase: "Jan 27 2019",
      piecesBoughtYear: 3,
      piecesBoughtTotal: 6,
      status: true,
      boughtFromWhom: ["gkVgiBvx4OXWEtLtQkne0ICgrMm2"]
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};
