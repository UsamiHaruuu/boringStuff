import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid, CardActionArea } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: theme.spacing(1)
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    textAlign: "center"
  },
  image: {
    height: "120px",
    width: "120px",
    alignItems: "center"
  },
  select: {
    backgroundColor: "#3f51b5"
  }
}));

const EmailImage = ({
  inventory,
  selectedImages,
  setSelectedImages,
  formData
}) => {
  const classes = useStyles();

  const handleImage = (item, formData) => {
    if (selectedImages.includes(item)) {
      setSelectedImages(
        selectedImages.filter(image => image.title !== item.title)
      );
    } else setSelectedImages([...selectedImages, item]);
  };
  return (
    <Container>
      <Grid xs={12} container item spacing={3} className={classes.root}>
        {inventory.map(item => (
          <Grid xs={4} item spacing={1}>
            <CardActionArea>
              <Card
                onClick={() => handleImage(item, formData)}
                variant={selectedImages.includes(item) ? "outlined" : null}
                className={
                  selectedImages.includes(item) ? classes.select : null
                }
              >
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <img src={item.add} className={classes.image} />
                    {item.title.length > 20 ? (
                      <Typography
                        style={{ lineHeight: "20px" }}
                        gutterBottom
                        variant="subtitle2"
                      >
                        {item.title.slice(0, 20) + "..."}
                      </Typography>
                    ) : (
                      <Typography
                        style={{ lineHeight: "20px" }}
                        gutterBottom
                        variant="subtitle2"
                      >
                        {item.title}
                      </Typography>
                    )}
                    <Typography variant="body" color="textSecondary">
                      ${item.price}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {item.isSold}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EmailImage;
