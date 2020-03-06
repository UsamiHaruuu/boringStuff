import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import Img from "./newlogo.jpg";
export const redirect = url => {
  window.location.href = url;
};
const HomeButton = () => {
  return (
    <Button onClick={() => redirect("/#")}>
      <img src={Img} width="110%" height="110%" alt="logo"></img>
    </Button>
  );
};

const Navigation = () => {
  return (
    <Container>
      <Grid container spacing={2} justify="center">
        <Grid item xs={3}>
          <Button
            style={{ color: "white", backgroundColor: "#292F36" }}
            variant="contained"
            disableElevation
            onClick={() => redirect("/#/marketing")}
          >
            <div className="NavFont">Marketing</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            style={{ color: "white", backgroundColor: "#292F36" }}
            variant="contained"
            disableElevation
            onClick={() => redirect("/#/audience")}
          >
            <div className="NavFont">Audience</div>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            style={{ color: "white", backgroundColor: "#292F36" }}
            variant="contained"
            disableElevation
            onClick={() => redirect("/#/inventory")}
          >
            <div className="NavFont">Inventory</div>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Navigation, HomeButton };
