import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import Divider from "@material-ui/core/Divider";

export const InventoryCard = () => {
  const classes = makeStyles();

  function renderRow(props) {
    const { index } = props;

    return (
      <ListItem button style={{}} key={index}>
        <img
          src={require(`../ProfileCard/art-photos/painting${index + 1}.jpg`)}
          style={{ width: 60, height: 60, marginRight: 20 }}
          alt=""
        />
        <ListItemText primary={`Painting ${index + 1}`} />
      </ListItem>
    );
  }

  renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired
  };
  return (
    <Paper className={classes.paper}>
      <Card className={classes.root}>
        <CardHeader
          title="Inventory"
          subheader="Art pieces I'm selling"
          className={classes.headerSize}
        />
        <Divider />
        <CardContent>
          <div>
            <FixedSizeList height={200} width={250} itemSize={46} itemCount={2}>
              {renderRow}
            </FixedSizeList>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
};
