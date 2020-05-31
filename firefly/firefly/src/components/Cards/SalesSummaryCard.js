import React from "react";
import { Divider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  block: {
    height: 50,
    margin: 10,
    width: "86%"
  },
  value: {
    fontSize: 30,
    width: 40,
    float: "left",
    textAlign: "center",
    marginRight: "5px"
  },
  describe: {
    float: "right",
    textAlign: "left",
    marginTop: "10px",
    width: 100,
    fontStyle: "italic",
    fontSize: "14px"
  }
}));

export const SalesSummaryCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ width: "100%" }}>
      <Button
        style={{ maxWidth: "50px", float: "right" }}
        color="primary"
        size="small"
      >
        Details
      </Button>
      <CardHeader title="Sales Summary" />

      <CardContent>
        <Typography component={"span"}>
          <div className={classes.block} style={{ display: "inline-block" }}>
            <Box className={classes.value}>12/21</Box>
            <Box className={classes.describe}>Paintings Sold</Box>
          </div>

          <div className={classes.block} style={{ display: "inline-block" }}>
            <Box className={classes.value}>$5380</Box>
            <Box className={classes.describe}>Revenue 2020</Box>
          </div>

          <div className={classes.block} style={{ display: "inline-block" }}>
            <Box className={classes.value}>$1210</Box>
            <Box className={classes.describe}>Revenue in March</Box>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};
