import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid, Container } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { collectWrapper } from "../collectorHelper";
import ContactList from "../components/ContactList/ContactList";
import StickyHeadTable from "../components/StickyHeadTable";

const MainPage = ({ contactData }) => {
  const fans = () => {
    return <div>Fans!</div>;
  };
  const supporters = () => {
    return <div>supporters!</div>;
  };
  const collectors = () => {
    return (
      <Grid container>
        <Grid item xs={6}>
          collectors!
        </Grid>
        <Grid item xs={6}>
          <Line
            data={collectWrapper.data}
            options={collectWrapper.option}
          ></Line>
        </Grid>
      </Grid>
    );
  };
  const collaborators = () => {
    return <div>collaborators!</div>;
  };
  return (
    <Container>
      <Switch>
        <Route path="/fans" component={fans}></Route>
        <Route path="/supporters" component={supporters}></Route>
        <Route path="/collectors" component={collectors}></Route>
        <Route path="/collaborators" component={collaborators}></Route>
      </Switch>
      <ContactList contactData={contactData} />
      <StickyHeadTable />
    </Container>
  );
};

export default MainPage;
