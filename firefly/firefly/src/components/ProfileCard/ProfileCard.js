import React from "react";
import { Paper } from "@material-ui/core";
import { Card, Divider, CardContent, Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  media: {
    borderRadius: 6,
    flexShrink: 0
  }
}));

export const ProfileCard = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Card>
        <CardHeader
          style={{ marginTop: "10%", marginBottom: "10%" }}
          title=" My Profile"
          subheader="This is Me"
        />
        <Divider />
        <img
          className={classes.media}
          src={require("./talin.JPG")}
          style={{ height: "80%", width: "80%", margin: "10%" }}
          alt=""
        />
        <CardContent style={{ margin: "auto", textAlign: "center" }}>
          <Typography variant="body2" color="textPrimary" component="h1">
            Kapta Bahsui
          </Typography>
          <Divider style={{ margin: 20 }} />
          <Typography variant="body2" color="textSecondary" component="p">
            Nothing is Impossible
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};
