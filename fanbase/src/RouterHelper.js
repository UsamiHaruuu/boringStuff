import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Button } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { collectWrapper } from "./collectorHelper";

const HomeButton = () => {
  return (
    <Button component={Link} to={"./"}>
      <div class="NavFont">
        <strong>FanBase</strong>
      </div>
    </Button>
  );
};
const Navigation = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={"/fans"}
          >
            <img src="logo192.png" width="25%" height="25%" />
            <div class="NavFont">fans</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={"./supporters"}
          >
            <img src="logo192.png" width="25%" height="25%" />
            <div class="NavFont">supporters</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={"./collectors"}
          >
            <img src="logo192.png" width="25%" height="25%" />
            <div class="NavFont">collectors</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={"./supporters"}
          >
            <img src="logo192.png" width="25%" height="25%" />
            <div class="NavFont">collaborators</div>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

const MainPage = () => {
  return (
    <Container>
      <Switch>
        <Route path="/fans" component={fans}></Route>
        <Route path="/supporters" component={supporters}></Route>
        <Route path="/collectors" component={collectors}></Route>
        <Route path="/collaborators" component={collaborators}></Route>
      </Switch>
    </Container>
  );
};
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
        <Line data={collectWrapper.data} options={collectWrapper.option}></Line>
      </Grid>
    </Grid>
  );
};
const collaborators = () => {
  return <div>collaborators!</div>;
};

export { Navigation, MainPage, HomeButton };
