import React, { useState } from "react";
import StickyHeadTable from "../components/Tables/StickyHeadTable";
import { Line } from "react-chartjs-2";
import { collectWrapper } from "../collectorHelper";
import Button from "@material-ui/core/Button";
import { /*fade, */ makeStyles } from "@material-ui/core/styles";
import { InputBase, Grid } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import BigLogo from "../imgs/AudiencePageLogo.png";
import { Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  search: {
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    border: "1px dashed white",
    //backgroundColor: fade("#f95c25", 0.35),
    color: "white",
    "&:hover": {
      backgroundColor: "#263238"
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  showTable: {
    marginTop: "10%"
  },
  title: {
    fontSize: 30,
    fontFamily: "ENGR",
    color: "#263238",
    textAlign: "left"
  },
  divider: {
    color: "white",
    marginTop: "5%",
    marginBottom: "2%"
  },
  button: {
    backgroundColor: "#263238",
    fontSize: 10,
    color: "white",
    marginBottom: "2%"
  }
}));

const AudiencePage = ({ contacts }) => {
  const [table, setTable] = useState(0);
  const classes = useStyles();
  const buyers = contacts.filter(contact => contact.type === "buyers");
  const galleries = contacts.filter(contact => contact.type === "galleries");
  const BuyersTable = () => {
    return (
      <div className="showTable">
        <div style={{ color: "white" }}> Manage My Buyers</div>
        <StickyHeadTable Data={buyers} />
      </div>
    );
  };
  const GalleriesTable = () => {
    return (
      <div className="showTable">
        <div style={{ color: "white" }}>Manage My Galleries</div>
        <StickyHeadTable Data={galleries} />
      </div>
    );
  };

  const SponsorsTable = () => {
    return (
      <div className="showTable">
        <div style={{ color: "white" }}>Manage My Sponsors</div>
        <div className="line">
          <Line
            data={collectWrapper.data}
            options={collectWrapper.option}
          ></Line>
        </div>
      </div>
    );
  };

  const MentorsTable = () => {
    return (
      <div style={{ color: "white" }} className="showTable">
        Manage My Mentors
      </div>
    );
  };

  const SearchBar = () => {
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    );
  };

  const UpperPage = () => {
    return (
      <Grid container>
        <Grid item xs={8}>
          <p letterSpacing={10} className={classes.title}>
            AUDIENCE
          </p>
          <Grid container>
            <Grid item xs={3}>
              <img
                src={require("../imgs/iconA.png")}
                alt="buyer"
                onClick={() => setTable(0)}
                id="img1"
              />
              <Typography
                align="center"
                variant="body2"
                style={{ marginTop: "-20%", color: "#f6c962" }}
                for="img1"
              >
                Buyers
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <img
                src={require("../imgs/iconB.png")}
                alt="gallery"
                onClick={() => setTable(1)}
              />
              <Typography
                align="center"
                variant="body2"
                style={{ marginTop: "-20%", color: "#a6dae8" }}
              >
                Galleries
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <img
                src={require("../imgs/iconC.png")}
                alt="sponser"
                onClick={() => setTable(2)}
              />
              <Typography
                align="center"
                variant="body2"
                style={{ marginTop: "-20%", color: "#2c5871" }}
              >
                Sponsers
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <img
                src={require("../imgs/iconD.png")}
                alt="mentor"
                onClick={() => setTable(3)}
              />
              <Typography
                align="center"
                variant="body2"
                style={{ marginTop: "-20%", color: "#f95c25" }}
              >
                Mentors
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "right" }}>
          <img
            src={BigLogo}
            align="center"
            width="100%"
            height="100%"
            alt="logo"
          />
          <SearchBar />
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
      <UpperPage />
      <Divider flexItem className={classes.divider} />
      <Button
        variant="contained"
        class={classes.button}
        onClick={() => setTable(4)}
      >
        Show All Tables
      </Button>
      <div>
        {table === 0 ? (
          <BuyersTable />
        ) : table === 1 ? (
          <GalleriesTable />
        ) : table === 2 ? (
          <SponsorsTable />
        ) : table === 3 ? (
          <MentorsTable />
        ) : (
          <div>
            <BuyersTable />
            <GalleriesTable />
            <SponsorsTable />
            <MentorsTable />
          </div>
        )}
      </div>
    </div>
  );
};

export default AudiencePage;
