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
      sku: "00001",
      title: "Qantarat Sidi-Rabbi",
      date: "012-02-2015",
      price: 2000,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1456533079249-ZDTJNJTHIPKAOFPTMPE0/ke17ZwdGBToddI8pDm48kO3Gih6e6R_aPf8rVoCHtch7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hGaawTDWlunVGEFKwsEdnHmOvn4icDZa9ccVlmUYe78OkZlklUXIOtEqUr4S_MoQQ/IMG_0069.jpg?format=2500w"
    },
    {
      sku: "00002",
      title: "Show me how far your arms can reach",
      date: "01-12-2017",
      price: 1150,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1448311010345-RWNQWQGZVCOVN8ME84B5/ke17ZwdGBToddI8pDm48kLB9E5AAVh-gYyk7r0ZaFTx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hHMyhIh2kKzuOL3ydJCryBSHyMlxCBJR6n0My9VhEE9EJy_dOlrkid37ykdfdoxWA/IMG_0203-Edit-Edit-Edit.jpg?format=2500w"
    },
    {
      sku: "00003",
      title: "Love a wall",
      date: "07-01-2018",
      price: 1500,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1448311010339-REO00RWXN5W7KZCUOO6X/ke17ZwdGBToddI8pDm48kDDib7At68GdEmdEug3sMkp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iy8Rj2bPXFyaluz0PeKicNiIqTv1U4zHs0tWcdwAPcSWmkD_vlVZhvp1ixyKcc3bw/IMG_0199-Edit.jpg?format=2500w"
    },
    {
      sku: "00004",
      title: "Garnier Fructis",
      date: "01-01-2005",
      price: 1700,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1568604570291-M5D4RG4K5ZGDUHBZ2OQW/ke17ZwdGBToddI8pDm48kN_ZoNdj1kv_gIvm4zjH76N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8AelHsSihC3tfiYK1eHEM7W3AVjJQSBul2wE-DqW7dygg/DSC00826.jpg?format=2500w"
    },
    {
      sku: "00005",
      title: "Black Star (Maybe Grief is Circular)",
      date: "01-04-2020",
      price: 1200,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1568604357607-DWO8HY0OQP222WDP4DZJ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/DSC00850.jpg?format=2500w"
    },
    {
      sku: "00006",
      title: "Industry Plant",
      date: "05-01-2009",
      price: 1620,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1541380108504-52BPGX9FCF9CIWHTXUTX/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_0115.jpg?format=2500w"
    },
    {
      sku: "00007",
      title: "The Iraq War did not take Place",
      date: "09-13-2019",
      price: 1060,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1541380110481-5SHHB8D9ZWJIK90EB5M1/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_0106.jpg?format=2500w"
    },
    {
      sku: "00008",
      title: "Welcome to America",
      date: "08-15-2013",
      price: 1320,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1518129540893-N1UQLHOAY7SELZN3IRM3/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/IMG_9249Final.jpg?format=2500w"
    },
    {
      sku: "00009",
      title: "Keys to the Cuffs",
      date: "02-15-2016",
      price: 1500,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1505361776108-VU65SUS1V9H8LP5T6Y9X/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_8891Final.jpg?format=2500w"
    },
    {
      sku: "00010",
      title: "A Plant called Honesty",
      date: "02-17-2016",
      price: 1320,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1572834658322-7R6XTKZNIVTXQTRJQX8S/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/DSC01230.jpg?format=2500w"
    },
    {
      sku: "00011",
      title: "Tin Roof",
      date: "07-15-2018",
      price: 1500,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1572834703990-BEKNI9HO0PVFDMEDXLJ2/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/DSC01020.jpg?format=2500w"
    },
    {
      sku: "00012",
      title: "Spirit; A need for Strong Hands",
      date: "10-15-2018",
      price: 1500,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1548102631466-MQ4LB3TTBD7GMTDUTJEW/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_0134.jpg?format=2500w"
    },
    {
      sku: "00013",
      title: "A Power to which the Past has a Claim",
      date: "12-02-2018",
      price: 1320,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1541380113503-4WOY9VOQLDES1048S57X/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_0010.jpg?format=2500w"
    },
    {
      sku: "00014",
      title: "Daddy's going to pay for your Crashed Car",
      date: "11-06-2018",
      price: 1500,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1541380115053-OI6T2I868W27VW8I95GN/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_0002.jpg?format=2500w"
    },
    {
      sku: "00015",
      title: "JellyFish (Love shakes over)",
      date: "02-03-2020",
      price: 1720,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1541380114550-V7WCX5HQ1Y8UB9D5WMHR/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/IMG_0008.jpg?format=2500w"
    },
    {
      sku: "00016",
      title: "Fox / Hen",
      date: "04-27-2016",
      price: 1230,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1541383058611-0B68XL1C1E51YPW36ABQ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_9966-Edit.jpg?format=2500w"
    },
    ,
    {
      sku: "00017",
      title: "My new Bag",
      date: "02-15-2020",
      price: 1500,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1541383061635-YI6NNPVEWOSIGKYUWUGR/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_0161.jpg?format=2500w"
    },
    ,
    {
      sku: "00018",
      title: "All my Flowers Kneeling",
      date: "03-15-2017",
      price: 1500,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1534954847671-7DH0C8UVB0T9JP4C4QR6/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_9957Final.jpg?format=2500w"
    },
    ,
    {
      sku: "00019",
      title: "Bad as I wanna be Released",
      date: "08-23-2019",
      price: 1030,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1534954830746-WLAUYWL36MA4L03SHXP5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_0022Final.jpg?format=2500w"
    },
    ,
    {
      sku: "00020",
      title: "Thrust",
      date: "03-01-2019",
      price: 1500,
      isSold: false,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1534954833342-B60VJ1WZGKVACQD97H26/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_0001Final.jpg?format=2500w"
    },
    {
      sku: "00021",
      title: "Cursed Image (FaceBook Post)",
      date: "09-19-2016",
      price: 1500,
      isSold: true,
      add:
        "https://images.squarespace-cdn.com/content/v1/5192e9aee4b09d4594e64fe3/1518650490646-SP266TQUIPN9L3ER1LAH/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/IMG_4541Final.jpg?format=2500w"
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
      <Banner
        user={user}
        numRed={contacts.filter(contact => contact.status === "R").length}
      />
      <Container>
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <DashBoardPage
                contacts={contacts}
                currUser={user}
                inventory={inventory}
              />
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
