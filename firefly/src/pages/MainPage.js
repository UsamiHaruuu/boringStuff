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
  const notifications = () => {
    return <div>notifications!</div>;
  };
  const email = () => {
    return <div>emails??!</div>;
  };
  const homepage = () => {
    return (
      <div>
        <div>homepage</div>
        <StickyHeadTable contactData={contactData} />
      </div>
    );
  };
  return (
    <Container>
      <Switch>
        <Route exact path="/buyers" component={buyers}></Route>
        <Route exact path="/" component={homepage}></Route>
        <Route exact path="/galleries" component={galleries}></Route>
        <Route exact path="/sponsors" component={sponsors}></Route>
        <Route exact path="/mentors" component={mentors}></Route>
        <Route exact path="/email" component={email}></Route>
        <Route exact path="/notifications" component={notifications}></Route>
      </Switch>
    </Container>
  );
};
export default MainPage;
