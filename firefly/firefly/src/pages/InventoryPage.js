import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InventoryPageCard from "../components/Cards/InventoryPageCard";
import Box from "@material-ui/core/Box";
import {
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white"
  },
  buttons: {
    backgroundColor: "white",
    width: "70px",
    color: "black",
    backgroundColor: "white"
  }
}));

const InventoryPage = ({ inventory }) => {
  const classes = useStyles();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDrawerOpen = () => setDropdownOpen(prevState => !prevState);
  const [toggleSold, setToggleSold] = useState("all");
  const [filteredInventory, setFilteredInventory] = useState(inventory);

  const handleStatus = e => {
    if (e.target.value === "sold") setToggleSold("sold");
    if (e.target.value === "unsold") setToggleSold("unsold");
    if (e.target.value === "all") setToggleSold("all");
  };

  useEffect(() => {
    if (toggleSold === "sold")
      setFilteredInventory(inventory.filter(item => item.isSold === true));
    else if (toggleSold === "unsold")
      setFilteredInventory(inventory.filter(item => item.isSold === false));
    else if (toggleSold === "all") setFilteredInventory(inventory);
  }, [toggleSold]);

  return (
    <React.Fragment>
      <p style={{ marginTop: "2%" }}>
        <b>12</b> paintings sold
        <br />
        <b>9</b> paintings left in inventory
      </p>
      <div style={{ textAlign: "center", paddingBottom: "20px" }}>
        <ButtonGroup style={{ marginLeft: "10%" }}>
          <Button
            size="sm"
            className={classes.buttons}
            value="all"
            onClick={handleStatus}
            style={toggleSold == "all" ? { backgroundColor: "#e3e1dc" } : {}}
          >
            all
          </Button>
          <Button
            size="sm"
            className={classes.buttons}
            onClick={handleStatus}
            value="unsold"
            style={toggleSold == "unsold" ? { backgroundColor: "#e3e1dc" } : {}}
          >
            unsold
          </Button>
          <Button
            size="sm"
            className={classes.buttons}
            onClick={handleStatus}
            value="sold"
            style={toggleSold == "sold" ? { backgroundColor: "#e3e1dc" } : {}}
          >
            sold
          </Button>
        </ButtonGroup>
        <ButtonDropdown
          size="sm"
          style={{ float: "right" }}
          isOpen={dropdownOpen}
          toggle={toggleDrawerOpen}
        >
          <DropdownToggle caret>Date Created</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Most Recent</DropdownItem>
            <DropdownItem>Oldest</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      <Box
        style={{ backgroundColor: "white", paddingBottom: "5%" }}
        display="flex"
        flexWrap="wrap"
      >
        {filteredInventory.map(item => (
          <InventoryPageCard item={item} />
        ))}
      </Box>
    </React.Fragment>
  );
};

export default InventoryPage;
