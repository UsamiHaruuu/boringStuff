import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Img from "./logowhite.png";

const HomeButton = () => {
  return (
    <Button component={Link} to="./">
      <img src={Img} width="100%" height="100%" alt="logo"></img>
    </Button>
  );
};

const Navigation = () => {
  return (
    <Container>
      <Grid container spacing={2} justify="center">
        <Grid item xs={3}>
          <Button
            style={{ color: "white", backgroundColor: "black" }}
            variant="contained"
            disableElevation
            component={Link}
            to={"./business"}
          >
            <div className="NavFont">Business</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            style={{ color: "white", backgroundColor: "black" }}
            variant="contained"
            disableElevation
            component={Link}
            to={"./marketing"}
          >
            <div className="NavFont">Marketing</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            style={{ color: "white", backgroundColor: "black" }}
            variant="contained"
            disableElevation
            component={Link}
            to={"./audience"}
          >
            <div className="NavFont">Audience</div>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Navigation, HomeButton };
