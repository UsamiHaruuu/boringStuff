import React, { useState, useEffect } from "react";
import StickyHeadTable from "../components/Tables/StickyHeadTable";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase, Grid } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { Typography, Divider } from "@material-ui/core";
import ModalManager from "../components/Modal/ModalManager";
import { useLocation } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  search: {
    float: "right",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px dashed #263238",
    color: "#263238",
    "&:hover": {
      backgroundColor: "white"
    },
    marginRight: theme.spacing(2),
    marginTop: "10%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "relative",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    float: "left",
    marginTop: "5px"
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
    marginTop: "2%",
    marginBottom: "2%"
  },
  button: {
    backgroundColor: "#263238",
    fontSize: 10,
    color: "white",
    marginBottom: "2%"
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    border: "8px solid",
    borderColor: "#308047"
  }
}));

const AudiencePage = ({ contacts, currUser, inventory }) => {
  const [table, setTable] = useState(3);
  const classes = useStyles();
  const buyers = contacts.filter(contact => contact.type === "buyers");
  const galleries = contacts.filter(contact => contact.type === "galleries");
  const collectors = contacts.filter(contact => contact.type === "collectors");
  const [tableContact, setTableContact] = useState([]);
  const { info } = useLocation();
  console.log("this is info", info);
  const AllContactsTable = () => {
    return (
      <div className="showTable">
        <div
          style={{
            color: "#263238",
            marginTop: "2%",
            fontFamily: "Roboto",
            marginBottom: "1%"
          }}
        >
          Manage All My Contacts
        </div>
        <StickyHeadTable
          Data={contacts}
          tableContact={tableContact}
          setTableContact={setTableContact}
        />
      </div>
    );
  };
  const BuyersTable = () => {
    return (
      <div className="showTable">
        <div
          style={{
            color: "#263238",
            marginTop: "2%",
            fontFamily: "Roboto",
            marginBottom: "1%"
          }}
        >
          Manage My Buyers
        </div>
        <StickyHeadTable
          Data={buyers}
          tableContact={tableContact}
          setTableContact={setTableContact}
        />
      </div>
    );
  };
  const GalleriesTable = () => {
    return (
      <div className="showTable">
        <div
          style={{
            color: "#263238",
            marginTop: "2%",
            fontFamily: "Roboto",
            marginBottom: "1%"
          }}
        >
          Manage My Galleries
        </div>
        <StickyHeadTable
          Data={galleries}
          tableContact={tableContact}
          setTableContact={setTableContact}
        />
      </div>
    );
  };

  const CollectorsTable = () => {
    return (
      <div className="showTable">
        <div
          style={{
            color: "#263238",
            marginTop: "2%",
            fontFamily: "Roboto",
            marginBottom: "1%"
          }}
        >
          Manage My Collectors
        </div>
        <StickyHeadTable
          Data={collectors}
          tableContact={tableContact}
          setTableContact={setTableContact}
        />
      </div>
    );
  };

  const SearchBar = () => {
    return (
      <div className={classes.search}>
        <InputBase
          placeholder="Start Typing Name..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
      </div>
    );
  };

  const UpperPage = () => {
    return (
      <Grid container style={{ marginTop: "3%" }}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={3}>
              <Avatar
                src={require("../imgs/All.png")}
                alt="all"
                className={classes.large}
                onClick={() => setTable(3)}
              />
              <Typography
                variant="body2"
                style={{
                  color: "#263238",
                  marginTop: "10px",
                  marginLeft: "45px"
                }}
              >
                All
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <Avatar
                src={require("../imgs/Collectors.png")}
                alt="collector"
                onClick={() => setTable(2)}
                className={classes.large}
                style={{ marginLeft: "-35px" }}
              />
              <Typography
                variant="body2"
                style={{
                  color: "#263238",
                  marginTop: "10px",
                  marginLeft: "-10px"
                }}
              >
                Collectors
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Avatar
                src={require("../imgs/Buyers.png")}
                alt="buyer"
                onClick={() => setTable(0)}
                className={classes.large}
                style={{ marginLeft: "-65px" }}
              />
              <Typography
                variant="body2"
                style={{
                  color: "#263238",
                  marginTop: "10px",
                  marginLeft: "-30px"
                }}
              >
                Buyers
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Avatar
                src={require("../imgs/Galleries.png")}
                alt="gallery"
                onClick={() => setTable(1)}
                className={classes.large}
                style={{ border: "8px solid #FFC368", marginLeft: "-90px" }}
              />
              <Typography
                variant="body2"
                style={{
                  color: "#263238",
                  marginTop: "10px",
                  marginLeft: "-60px"
                }}
              >
                Galleries
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "right" }}>
          <SearchBar />
          <ButtonGroup style={{ paddingTop: "10px", width: "350px" }}>
            <ModalManager
              currUser={currUser}
              inventory={inventory}
              contacts={contacts}
              info={info}
              tableContact={tableContact}
            />
            <Button
              style={{ maxHeight: "30px" }}
              className="add-button"
              variant="contained"
            >
              Last Engaged
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  };
  return (
    <div>
      <UpperPage />
      <Divider flexItem className={classes.divider} />
      <div>
        {table === 0 ? (
          <BuyersTable />
        ) : table === 1 ? (
          <GalleriesTable />
        ) : table === 2 ? (
          <CollectorsTable />
        ) : (
          <div>
            {" "}
            <AllContactsTable />
          </div>
        )}
      </div>
    </div>
  );
};

export default AudiencePage;
