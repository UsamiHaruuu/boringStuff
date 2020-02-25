import React from "react";
import { TableView } from "../Tables/TableView";
import { Divider,CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: 300
  },
  title: {
    fontSize: 15
  },
  table: {
    minWidth: 650
  }
}));

const redirect = url => {
  window.location.href = url;
};

export const AudienceCard = ({ Data }) => {
  const filteredData = Data.filter(data=>data.status===true)
  const classes = useStyles();
  return (
    <Card className={classes.root}>
    <CardActionArea>
    <CardHeader
        onClick={() => redirect("audience")}
        title=" Audiences and Contacts "
        fontSize={15}
        subheader="Contacts you might want to follow up"
      ></CardHeader>
    </CardActionArea>
      <Divider />
      <CardContent>
        <TableView Data={filteredData} style={{ width: "40px", height: "50px" }} />
      </CardContent>

    </Card>
  );
};
