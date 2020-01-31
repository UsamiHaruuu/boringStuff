import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid, Container } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { collectWrapper } from "../collectorHelper";
import StickyHeadTable from "../components/StickyHeadTable";

const MainPage = ({ contactData }) => {
  const buyers = () => {
    return <div>Buyers!</div>;
  };
  const galleries = () => {
    return <div>Galleries!</div>;
  };
  const sponsors = () => {
    return (
      <Grid container>
        <Grid item xs={6}>
          Sponsors!
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
  const mentors = () => {
    return <div>Mentors!</div>;
  };
  return (
    <Container>
      <Switch>
        <Route path="/buyers" component={buyers}></Route>
        <Route path="/galleries" component={galleries}></Route>
        <Route path="/sponsors" component={sponsors}></Route>
        <Route path="/mentors" component={mentors}></Route>
      </Switch>
      <StickyHeadTable contactData={contactData} />
    </Container>
  );
};

export default MainPage;
