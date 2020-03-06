import React from "react";
import { Divider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Line } from "react-chartjs-2";
import { collectWrapper } from "./collectorHelper";
import Typography from "@material-ui/core/Typography";
import Chart from "chart.js";

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
export const ProfitsCard = () => {
  const thisYear = new Date();
  const classes = useStyles();
  Chart.defaults.global.elements.line.tension = 0;

  return (
    <Card className={classes.root} style={{ width: "100%" }}>
      <Button
        style={{ maxWidth: "50px", float: "right" }}
        color="primary"
        size="small"
      >
        DETAILS
      </Button>
      <CardHeader title={"Profits " + thisYear.getFullYear()} />
      <Divider />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="left"
        >
          Monthly Revenue: $1210 / Art supplies cost: $610
        </Typography>

        <Line
          height={100}
          data={collectWrapper.data}
          options={collectWrapper.option}
        ></Line>
      </CardContent>
    </Card>
  );
};
