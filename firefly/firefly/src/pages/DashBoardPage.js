import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { InventoryCard } from "../components/Cards/InventoryCard";
import { MarketingCard } from "../components/Cards/MarketingCard";
import { ProfitsCard } from "../components/Cards/Profits/ProfitsCard";
import { AudienceCard } from "../components/Cards/AudienceCard";
import { SalesSummaryCard } from "../components/Cards/SalesSummaryCard";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

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
    fontSize: 15,
    fontFamily: "ENGR",
    color: "#263238",
    textAlign: "left"
  },
  cardsAlign: {
    display: "flex",
    justifyContent: "space-between"
  },
  topwords: {
    fontSize: "30px",
    float: "left",
    fontFamily: "Roboto",
    marginTop: "35px",
    marginBottom: "-15px"
  }
}));

const DashBoardPage = ({ contacts, currUser, inventory }) => {
  const classes = useStyles();
  //console.log(user);
  const BorderLinearProgress = withStyles({
    root: {
      backgroundColor: "transparent",
      width: "150px",
      height: "15px",
      border: "1px solid #63D0FF",
      borderColor: "#63D0FF"
    },
    bar: {
      backgroundColor: "#63D0FF"
    }
  })(LinearProgress);

  //for inventory card, only shows first three inventories
  inventory = inventory.slice(0, 3);

  return (
    <div className={classes.root}>
      {currUser === null ? (
        <p className={classes.topwords}>Welcome, please log in.</p>
      ) : (
        <p className={classes.topwords}>Welcome Zach!</p>
      )}
      <div style={{ float: "right" }}>
        <p style={{ marginTop: "13%" }}>Your Progress: 60%</p>
        <BorderLinearProgress
          style={{ float: "left", marginTop: "-6px" }}
          variant="determinate"
          value={60}
        />
        <Typography
          style={{ float: "right", marginTop: "-8px" }}
          variant="body2"
          color="textSecondary"
          component={"span"}
        >
          CONTINUE
        </Typography>
      </div>

      <Grid container spacing={2} className={classes.col} alignItems="stretch">
        <Grid item xs={3} className={classes.cardsAlign}>
          <SalesSummaryCard />
        </Grid>
        <Grid item xs={5} className={classes.cardsAlign}>
          <AudienceCard Data={contacts} />
        </Grid>
        <Grid item xs={4} className={classes.cardsAlign}>
          <MarketingCard />
        </Grid>
      </Grid>

      <Grid container spacing={2} className={classes.col} alignItems="stretch">
        <Grid item xs={8} className={classes.cardsAlign}>
          <ProfitsCard />
        </Grid>
        <Grid item xs={4} className={classes.cardsAlign}>
          <InventoryCard inventory={inventory} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoardPage;
