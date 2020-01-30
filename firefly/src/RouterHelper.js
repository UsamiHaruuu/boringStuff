import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Button, Divider } from "@material-ui/core";
const Navigation = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    typography: {
      fontFamily: "Roboto"
    }
  }));
  const classes = useStyles();
  return (
    <Container className={classes.typography}>
      <Grid container spacing={0} className={classes.typography}>
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
    <Switch>
      <Route path="/fans" component={fans}></Route>
      <Route path="/supporters" component={supporters}></Route>
      <Route path="/collectors" component={collectors}></Route>
      <Route path="/collaborators" component={collaborators}></Route>
    </Switch>
  );
};
const fans = () => {
  return <div>Fans!</div>;
};
const supporters = () => {
  return <div>supporters!</div>;
};
const collectors = () => {
  return <div>collectors!</div>;
};
const collaborators = () => {
  return <div>collaborators!</div>;
};

export { Navigation, MainPage };
