import React from "react";
import {
  Button,
  Paper,
  Grid,
  Divider,
  CardHeader,
  CardContent,
  Card,
  CardActionArea
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { redirect } from "../Banner/Navigation";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    maxHeight: "80px",
    maxWidth: "80px"
  },
  paper: {
    width: "100%",
    marginBottom: 20,
    marginTop: 5,
    marginLeft: 10,
    height: "80px"
  }
}));

export const InventoryCard = ({ inventory }) => {
  const classes = useStyles();
  const InventoryRows = ({ item }) => {
    return (
      <Paper elevation={0} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              src={item.add}
              style={{ width: 75, height: 75 }}
              alt={item.add}
            />
          </Grid>
          <Grid item xs={4}>
            {item.title.length > 16 ? (
              <Typography
                style={{ lineHeight: "75px", marginLeft: -20 }}
                gutterBottom
                variant="subtitle2"
              >
                {item.title.slice(0, 16) + "..."}
              </Typography>
            ) : (
              <Typography
                style={{ lineHeight: "75px", marginLeft: -20 }}
                gutterBottom
                variant="subtitle2"
              >
                {item.title}
              </Typography>
            )}
          </Grid>
          <Grid item xs={4} style={{ lineHeight: "75px" }}>
            {item.isSold === false ? (
              <Button color="secondary" className={classes.button}>
                LEAD!
              </Button>
            ) : (
              <Button color="default" className={classes.button}>
                SOLD
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
    );
  };
  return (
    <div className={classes.root}>
      <Card className={classes.root} style={{ width: "100%" }}>
        <CardActionArea onClick={() => redirect("/#/inventory")}>
          <Button
            style={{ maxWidth: "50px", float: "right" }}
            color="primary"
            size="small"
          >
            MORE
          </Button>
          <CardHeader title="Inventory" className={classes.headerSize} />
        </CardActionArea>

        <Divider />

        <CardContent>
          {inventory.map(item => (
            <InventoryRows item={item} key={Math.random()} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
