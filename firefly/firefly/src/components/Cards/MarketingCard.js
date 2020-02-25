import React from "react";
import { Divider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles(theme => ({}));

export const MarketingCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader className={classes.title} title="Marketing" />
      <Divider />
      <Button>
        Continue building up your profile to unlock more capablities
      </Button>
    </Card>
  );
};
