import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "./logo.png";
const HomeButton = () => {
  console.log(logo);
  return (
    <Button component={Link} to="./">
      <img src="logo.png" width="25%" height="25%" alt=""></img>
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
            to={"./buyers"}
          >
            {/* <img src="logo192.png" width="25%" height="25%" /> */}
            <div class="NavFont">buyers</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={"./galleries"}
          >
            {/* <img src="logo192.png" width="25%" height="25%" /> */}
            <div class="NavFont">galleries</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={"./sponsors"}
          >
            {/* <img src="logo192.png" width="25%" height="25%" /> */}
            <div class="NavFont">sponsors</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={"./mentors"}
          >
            {/* <img src="logo192.png" width="25%" height="25%" /> */}
            <div class="NavFont">mentors</div>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Navigation, HomeButton };
