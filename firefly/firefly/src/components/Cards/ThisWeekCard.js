import React, { useState } from "react";
import { Paper, Checkbox, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export const ThisWeekCard = () => {
  const dummydata = [
    "Post Instagram story of your art",
    "Follow up with Jane Bird",
    "Set up business insights ",
    "Set up marketing "
  ];
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const handleChange = event => {
    setChecked(event.target.checked);
  };
  return (
    <Card style={{ width: "100%" }}>
      <Button
        style={{ maxWidth: "50px", float: "right" }}
        color="primary"
        size="small"
      >
        DETAILS
      </Button>
      <CardHeader title="This Week" subheader="" />
      <Divider />
      <CardMedia image="/static/images/cards/paella.jpg" title="Paella dish" />

      <CardContent>
        {dummydata.map((data, index) => {
          return (
            <div>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="left"
              >
                <Checkbox
                  onChange={handleChange}
                  value="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                {data}
              </Typography>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
