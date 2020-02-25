import React from "react";
import { Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { lighten, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from "@material-ui/core/Divider";

export const ProgressCard = () => {
  const BorderLinearProgress = withStyles({
    root: {
      height: 20,
      backgroundColor: lighten("#ff6c5c", 0.5),
      margin: "20px",
      borderRadius: 20
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#ff6c5c"
    }
  })(LinearProgress);

  return (
    <Paper>
      <Card>
        <CardHeader
          title="Progress"
          subheader="Continue to build up your brand!"
        />
        <Divider />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Business: 50%
            <BorderLinearProgress
              variant="determinate"
              color="secondary"
              value={50}
            />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Marketing: 0%
            <BorderLinearProgress
              variant="determinate"
              color="secondary"
              value={0}
            />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Audience Management: 100%
            <BorderLinearProgress
              variant="determinate"
              color="secondary"
              value={100}
            />
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};
