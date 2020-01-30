import React from "react";
import "./App.css";
import { MainPage } from "./RouterHelper";
import { Banner } from "./Banner";
const App = () => {
  return (
    <div>
      <Banner />
      <MainPage />
    </div>
  );
};

export default App;
