import React, { useState, useEffect } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import "./App.css";
import DashBoardPage from "./pages/DashBoardPage";
import { Banner } from "./components/Banner/Banner";
import firebase from "firebase/app";
import "firebase/database";
import { db } from "./firebaseHelpers";
import "firebase/auth";
//import { firestoreUpdateAttr, firebaseReadAndWrite } from "./addDataHelper";
import AudiencePage from "./pages/AudiencePage";
import InventoryPage from "./pages/InventoryPage";
import { Container } from "@material-ui/core";
import Footer from "./components/Footer/Footer";

const App = () => {
  const inventory = [
    {
      sku: "11",
      title: "Qantarat Sidi-Rabbi",
      date: "012-02-2015",
      price: 2000,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1456533079249-ZDTJNJTHIPKAOFPTMPE0/ke17ZwdGBToddI8pDm48kO3Gih6e6R_aPf8rVoCHtch7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hGaawTDWlunVGEFKwsEdnHmOvn4icDZa9ccVlmUYe78OkZlklUXIOtEqUr4S_MoQQ/IMG_0069.jpg?format=2500w"
    },
    {
      sku: "1001",
      title: "Show me how far your arms can reach",
      date: "01-12-2017",
      price: 1150,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1448311010345-RWNQWQGZVCOVN8ME84B5/ke17ZwdGBToddI8pDm48kLB9E5AAVh-gYyk7r0ZaFTx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hHMyhIh2kKzuOL3ydJCryBSHyMlxCBJR6n0My9VhEE9EJy_dOlrkid37ykdfdoxWA/IMG_0203-Edit-Edit-Edit.jpg?format=2500w"
    },
    {
      sku: "1011",
      title: "Love a wall",
      date: "07-01-2018",
      price: 1500,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1448311010339-REO00RWXN5W7KZCUOO6X/ke17ZwdGBToddI8pDm48kDDib7At68GdEmdEug3sMkp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iy8Rj2bPXFyaluz0PeKicNiIqTv1U4zHs0tWcdwAPcSWmkD_vlVZhvp1ixyKcc3bw/IMG_0199-Edit.jpg?format=2500w"
    },
    {
      sku: "1206",
      title: "Garnier Fructis",
      date: "01-01-2005",
      price: 1700,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1568604570291-M5D4RG4K5ZGDUHBZ2OQW/ke17ZwdGBToddI8pDm48kN_ZoNdj1kv_gIvm4zjH76N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8AelHsSihC3tfiYK1eHEM7W3AVjJQSBul2wE-DqW7dygg/DSC00826.jpg?format=2500w"
    },
    {
      sku: "186441",
      title: "Black Star (Maybe Grief is Circular)",
      date: "01-04-2020",
      price: 1200,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1568604357607-DWO8HY0OQP222WDP4DZJ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/DSC00850.jpg?format=2500w"
    },
    {
      sku: "186441",
      title: "Industry Plant",
      date: "05-01-2009",
      price: 1620,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1541380108504-52BPGX9FCF9CIWHTXUTX/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_0115.jpg?format=2500w"
    },
    {
      sku: "1011",
      title: "The Iraq War did not take Place",
      date: "09-13-2019",
      price: 1060,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1541380110481-5SHHB8D9ZWJIK90EB5M1/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_0106.jpg?format=2500w"
    },
    {
      sku: "1206",
      title: "Welcome to America",
      date: "08-15-2013",
      price: 1320,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1518129540893-N1UQLHOAY7SELZN3IRM3/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/IMG_9249Final.jpg?format=2500w"
    },
    {
      sku: "186441",
      title: "Keys to the Cuffs",
      date: "02-15-2016",
      price: 1500,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1505361776108-VU65SUS1V9H8LP5T6Y9X/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_8891Final.jpg?format=2500w"
    }
  ];
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
    <React.Fragment>
      <Banner user={user} />
      <Container>
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <DashBoardPage contacts={contacts} inventory={inventory} />
            </Route>
            <Route
              exact
              path="/marketing"
              render={() => (
                <p style={{ color: "black" }}>
                  this page is under construction
                </p>
              )}
            ></Route>
            <Route exact path="/audience">
              <AudiencePage
                contacts={contacts}
                currUser={user}
                inventory={inventory}
              />
            </Route>
            <Route exact path="/inventory">
              <InventoryPage inventory={inventory} />
            </Route>
          </Switch>
        </HashRouter>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default App;
