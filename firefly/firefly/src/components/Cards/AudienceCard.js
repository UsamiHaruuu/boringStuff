import React, { useState } from "react";
import { TableView } from "../Tables/TableView";
import { Divider, CardActionArea, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { redirect } from "../Banner/Navigation";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    fontSize: 15
  }
}));

export const AudienceCard = ({ Data }) => {
  const [redirect, setRedirect] = useState(true);
  //const filteredData = Data.filter(data => data.status === true);
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ width: "100%" }}>
      <CardActionArea onClick={() => redirect("/#/audience")}>
        <Button
          style={{ maxWidth: "50px", float: "right" }}
          color="primary"
          size="small"
          component="span"
        >
          Details
        </Button>
        <CardHeader
          title=" Urgent Follow-ups "
          fontSize={15}
          //subheader="Contacts you might want to follow up"
        ></CardHeader>
      </CardActionArea>
      <Divider />
      <CardContent>
        <TableView
          Data={Data}
          redirect={redirect}
          setRedirect={setRedirect}
          style={{ height: "30px", width: "100%" }}
        />
      </CardContent>
    </Card>
  );
};
