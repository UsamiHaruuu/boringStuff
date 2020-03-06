import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "reactstrap";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  popover: {
    pointerEvents: "none"
  },
  paper: {
    width: 360,
    margin: 20
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  button: {
    height: "30px",
    textAlign: "left",
    marginLeft: "-15px",
    marginTop: "10px"
  }
}));

export default function InventoryPageCard({ item }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <React.Fragment className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase
              style={{ outline: "1px dotted gray" }}
              className={classes.image}
            >
              <img className={classes.img} art="inventory" src={item.add} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                {item.title.length > 20 ? (
                  <div>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      aria-owns={open ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                    >
                      {item.title.slice(0, 20) + "..."}
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      className={classes.popover}
                      classes={{
                        paper: classes.paper
                      }}
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left"
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                      <Typography>{item.title}</Typography>
                    </Popover>
                  </div>
                ) : (
                  <Typography gutterBottom variant="subtitle1">
                    {item.title}
                  </Typography>
                )}
                <Typography variant="subtitle2" gutterBottom>
                  $ {item.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.date}
                </Typography>

                <div>
                  {item.isSold === false ? (
                    <Button
                      color="link"
                      block
                      style={{ textAlign: "left" }}
                      className={classes.button}
                    >
                      FOLLOW UP ON LEAD!
                    </Button>
                  ) : (
                    <div style={{ height: "30px" }} />
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}
