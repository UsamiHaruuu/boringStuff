import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
            {/* <img src="logo192.png" width="25%" height="25%" /> */}
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
            {/* <img src="logo192.png" width="25%" height="25%" /> */}
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
            {/* <img src="logo192.png" width="25%" height="25%" /> */}
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
            {/* <img src="logo192.png" width="25%" height="25%" /> */}
            <div class="NavFont">collaborators</div>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Navigation, HomeButton };
