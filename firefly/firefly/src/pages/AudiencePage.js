import React, { useState, useEffect } from "react";
import StickyHeadTable from "../components/Tables/StickyHeadTable";
import EnhancedTable from "../components/Tables/EnhancedTable";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase, Grid } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { Typography, Divider } from "@material-ui/core";
import ModalManager from "../components/Modal/ModalManager";
import { useLocation } from "react-router-dom";

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
  }
}));
const AudiencePage = ({ contacts, currUser, inventory }) => {
  const emptyInputForm = {
    availableTill: new Date().toLocaleDateString(),
    subject: "",
    password: "",
    name: "",
    images: [],
    sendTo: [],
    template:
      "It’s been a while since my last show, but I hope you are doing well. I remember you particularly like my gouche pieces and wanted to share these recent ones with you. \n\nIf you’re interested, I would love to see you at my next show where I’ll be displaying these peices and others.",
    content: ""
  };
  const [table, setTable] = useState(0);
  const classes = useStyles();
  const [formData, setFormData] = useState(emptyInputForm);
  const buyers = contacts.filter(contact => contact.type === "buyers");
  const galleries = contacts.filter(contact => contact.type === "galleries");
  const collectors = contacts.filter(contact => contact.type === "collectors");
  const { info } = useLocation();
  const [contact, setContact] = useState([]);
  console.log("this is info", info);
  console.log(contacts);
  useEffect(() => {
    if (info) {
      setContact([...contact, info.name]);
      if (!formData["sendTo"].includes(info.name)) {
        formData["sendTo"].push(info.email);
      }
    }
  }, []);
  const BuyersTable = () => {
    return (
      <div className="showTable">
        <div style={{ color: "#263238", marginTop: "2%" }}>
          Manage My Buyers
        </div>
        <StickyHeadTable
          Data={buyers}
          contact={contact}
          setContact={setContact}
        />
      </div>
    );
  };
  const GalleriesTable = () => {
    return (
      <div className="showTable">
        <div style={{ color: "#263238", marginTop: "2%" }}>
          Manage My Galleries
        </div>
        <StickyHeadTable Data={galleries} />
      </div>
    );
  };

  const CollectorsTable = () => {
    return (
      <div className="showTable">
        <div style={{ color: "#263238", marginTop: "2%" }}>
          Manage My Collectors
        </div>
        <StickyHeadTable Data={collectors} />
      </div>
    );
  };

  const SearchBar = () => {
    return (
      <div className={classes.search}>
        <InputBase
          placeholder="Start Typing name..."
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
      <Grid container style={{ marginTop: "2%" }}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={3}>
              <img
                src={require("../imgs/Buyers.png")}
                alt="buyer"
                onClick={() => setTable(0)}
                id="img1"
              />
              <Typography
                variant="body2"
                style={{
                  color: "#263238",
                  marginTop: "10px",
                  marginLeft: "37px"
                }}
              >
                Buyers
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <img
                src={require("../imgs/Galleries.png")}
                alt="gallery"
                onClick={() => setTable(1)}
                style={{ marginLeft: "-25px" }}
              />
              <Typography
                variant="body2"
                style={{
                  color: "#263238",
                  marginTop: "10px",
                  marginLeft: "10px"
                }}
              >
                Galleries
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <img
                src={require("../imgs/Collectors.png")}
                alt="collector"
                onClick={() => setTable(3)}
                style={{ marginLeft: "-40px" }}
              />
              <Typography
                variant="body2"
                style={{
                  color: "#263238",
                  marginTop: "10px",
                  marginLeft: "-13px"
                }}
              >
                Collectors
              </Typography>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            class={classes.button}
            onClick={() => setTable(4)}
          >
            Show All Tables
          </Button>
          <SearchBar />
          <ButtonGroup style={{ paddingTop: "10px", width: "350px" }}>
            <ModalManager
              currUser={currUser}
              inventory={inventory}
              contacts={contacts}
              info={info}
              contact={contact}
              setContact={setContact}
              formData={formData}
              setFormData={setFormData}
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
        ) : (
          <CollectorsTable />
        )}
      </div>
    </div>
  );
};

export default AudiencePage;
