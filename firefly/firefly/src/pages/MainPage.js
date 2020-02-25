import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ProfileCard } from "../components/ProfileCard/ProfileCard";
import { WeeklyTodoCard } from "../components/Cards/WeeklyTodoCard";
import { InventoryCard } from "../components/Cards/InventoryCard";
import { ProgressCard } from "../components/Cards/ProgressCard";
import { BusinessCard } from "../components/Cards/BusinessCard";
import { AudienceCard } from "../components/Cards/AudienceCard";
import { MarketingCard } from "../components/Cards/MarketingCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  col: {
    marginTop: 10
  },
  title: {
    fontSize: 35,
    fontFamily: "ENGR",
    //color: "#263238",
    color: "white",
    textAlign: "center"
  }
}));

const MainPage = ({ contacts }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p letterSpacing={10} className={classes.title}>
        HOMEPAGE
      </p>
      <Grid container spacing={2}>
        <Grid item xs={2} className={classes.col}>
          <Grid item zeroMinWidth>
            <ProfileCard />
          </Grid>
        </Grid>

        <Grid item xs={3} flexDirection="column">
          <Grid item zeroMinWidth className={classes.col}>
            <Paper>
              <MarketingCard />
            </Paper>
          </Grid>
          <Grid item zeroMinWidth className={classes.col}>
            <WeeklyTodoCard />
          </Grid>
        </Grid>

        <Grid item xs={4} flexDirection="column">
          <Grid item zeroMinWidth className={classes.col}>
            <Paper>
              <BusinessCard />
            </Paper>
          </Grid>

          <Grid item zeroMinWidth className={classes.col}>
            <ProgressCard />
          </Grid>
        </Grid>

        <Grid item xs={3} flexDirection="column">
          <Grid item zeroMinWidth className={classes.col}>
            <InventoryCard />
          </Grid>
          <Grid item zeroMinWidth className={classes.col}>
            <Paper>
              <AudienceCard Data={contacts} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
