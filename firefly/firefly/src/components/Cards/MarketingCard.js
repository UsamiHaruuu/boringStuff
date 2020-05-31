import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { lighten, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Divider, Button } from "@material-ui/core";

export const MarketingCard = () => {
  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten("#ff6c5c", 0.5),
      margin: "10px",
      borderRadius: 10
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#ff6c5c"
    }
  })(LinearProgress);

  return (
    <Card style={{ width: "100%" }}>
      <Button
        style={{ maxWidth: "50px", float: "right" }}
        color="primary"
        size="small"
      >
        Details
      </Button>
      <CardHeader
        title="Promotions"
        //subheader="Continue to build up your brand!"
      />
      <Divider />
      <CardContent>
        <img
          src={require("../../imgs/samplecalendar.png")}
          style={{ width: "100%", marginTop: "5%" }}
        />
      </CardContent>
    </Card>
  );
};
