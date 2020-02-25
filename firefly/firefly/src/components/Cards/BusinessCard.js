import React from "react";
import { Divider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Line } from "react-chartjs-2";
import { collectWrapper } from "../../collectorHelper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,

    "& svg": {
      margin: theme.spacing(1.5)
    },
    "& hr": {
      margin: theme.spacing(0, 0.5)
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    fontSize: 15
  }
}));
export const BusinessCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title=" Business Insights" />
      <Divider />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="left"
        >
          Monthly Revenue: $1410 <br />
          Art supplies cost: $610
        </Typography>
        <Line data={collectWrapper.data} options={collectWrapper.option}></Line>
      </CardContent>
      <Button>
        Continue building up your profile to unlock more capablities
      </Button>
    </Card>
  );
};
