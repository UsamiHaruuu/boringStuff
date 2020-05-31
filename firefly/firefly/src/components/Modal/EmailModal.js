import React, { useState, useContext, useEffect } from "react";
// import shortid from "shortid";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Modal, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./EmailModal.css";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import PropTypes from "prop-types";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import Typography from "@material-ui/core/Typography";
import firebase from "firebase/app";
import EmailImage from "./EmailImage";
import GetHtml from "./GetHtml";
import { renderEmail } from "react-html-email";
import ContactChips from "./ContactChips";
import TemplatesPanel from "./TemplatesPanel";
const functions = firebase.functions();
require("firebase/functions");
const EmailModal = ({ state }) => {
  /* ##########
  
      QontoIcon  
  
  ########### */

  const useQontoStepIconStyles = makeStyles({
    root: {
      color: "#eaeaf0",
      display: "flex",
      height: 22,
      alignItems: "center"
    },
    active: {
      color: "#784af4"
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor"
    },
    completed: {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18
    }
  });

  function QontoStepIcon(props) {
    const QontoClasses = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
      <div
        className={clsx(QontoClasses.root, {
          [classes.active]: active
        })}
      >
        {completed ? (
          <Check className={QontoClasses.completed} />
        ) : (
          <div className={QontoClasses.circle} />
        )}
      </div>
    );
  }

  QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool
  };

  /* ##########
  
      Step helper function
  
  ########### */

  function getSteps() {
    return ["Set up your headers", "Select art pieces", "Preview / Send email"];
  } // return 3
  const {
    modalOpen,
    setModalOpen,
    currUser,
    contacts,
    info,
    tableContact
  } = state;
  const urgentInfo = info;
  const emptyInputForm = {
    availableTill: new Date().toLocaleDateString(),
    subject: "Come see my latest works",
    password: "",
    name: "",
    images: [],
    sendTo: [],
    template:
      "It’s been a while since my last show, but I hope you are doing well. I remember you particularly like my gouche pieces and wanted to share these recent ones with you. \n\nIf you’re interested, I would love to see you at my next show where I’ll be displaying these peices and others.",
    content: ""
  };
  useEffect(() => {
    if (tableContact.length > 0 && contacts) {
      let addedContacts = tableContact.filter(
        person => !contact.includes(person)
      );
      setContact(addedContacts);
      tableContact.map(contact => {
        let contactInfo = contacts.find(person => person.name === contact);
        if (!formData["sendTo"].includes(contactInfo.email))
          formData["sendTo"].push(contactInfo.email);
      });
    } else if (urgentInfo) {
      contact.push(urgentInfo.name);
      if (!formData["sendTo"].includes(urgentInfo.name)) {
        formData["sendTo"].push(urgentInfo.email);
      }
      setModalOpen(urgentInfo.open);
      urgentInfo.open = false;
    }
  }, []);
  /* ##########
   
  Email Modal 
   
  ########### */
  const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      padding: theme.spacing(1),
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      position: "absolute",
      // width: 600,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      overflow: "scroll"
    },
    "@media only screen and (min-width: 1024px)": {
      paper: {
        width: 800,
        height: 600
      }
    },

    button: {
      marginLeft: 75
    },

    divcontainer: {
      display: "flex"
    },
    successful: {
      textAlign: "center",
      fontSize: 30,
      marginTop: "20%"
    }
  }));
  const classes = useStyles();
  const stepperStyle = makeStyles(theme => ({
    root: {
      width: "100%"
    },
    button: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    image: {
      flexGrow: 1
    }
  }));
  const [formData, setFormData] = useState(emptyInputForm);
  const setFormField = (field, e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const [activeStep, setActiveStep] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const [contact, setContact] = useState([]);
  const steps = getSteps();
  const sendEmails = formData => {
    formData["sendTo"].map(email => {
      clickToSendEmail(email, formData);
    });
  };
  const clickToSendEmail = async (email, formData) => {
    const thisContact = contacts.find(
      contactInfo => contactInfo.email === email
    );
    if (thisContact) {
      const messageHtml = renderEmail(
        <GetHtml
          images={formData.images}
          name={thisContact.name}
          content={formData.content}
          template={formData.template}
        />
      );
      let sendEmail = functions.httpsCallable("SendEmail");
      sendEmail(
        await {
          sendFrom: currUser.email,
          password: formData.password,
          sendTo: email,
          subject: formData.subject,
          template: formData.template,
          content: formData.content,
          images: formData.images,
          name: formData.name,
          url:
            "https://images-na.ssl-images-amazon.com/images/I/71gQuSS24GL._AC_SX522_.jpg",
          html: messageHtml
        }
      ).catch(error => alert(error));
    }
  };
  const handleNext = e => {
    if (e.target.textContent === "Send Email" && currUser) {
      sendEmails(formData);
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    } else setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  formData["images"] = selectedImages;
  console.log(formData["sendTo"]);
  console.log(formData);
  return (
    <Modal
      open={modalOpen}
      onClose={() => {
        setModalOpen(false);
      }}
      className={classes.modal}
    >
      <div className={classes.paper} data-color="blue" data-backdrop="false">
        {currUser && activeStep !== 3 ? (
          <h5 align="right">
            Send from: <strong>{currUser.email}</strong>
          </h5>
        ) : null}
        {activeStep !== 3 ? <h3>Setting up your promotional email</h3> : null}
        <div className={classes.root}>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <div>
            {activeStep === steps.length ? (
              <p className={classes.successful}>Your email has been sent!</p>
            ) : (
              <div>
                <Typography className={classes.instructions} component={"span"}>
                  {activeStep === 0 ? (
                    // Basic Info Input
                    <div className="firstStep">
                      <h4>Write your message</h4>
                      <hr></hr>
                      <div>
                        <strong>Subject</strong>
                        <TextField
                          fullWidth
                          margin="normal"
                          onChange={e => setFormField("subject", e)}
                          required
                          variant="outlined"
                          defaultValue={
                            formData.subject
                              ? formData.subject
                              : emptyInputForm.subject
                          }
                        />
                      </div>

                      <div>
                        <strong>Content</strong>
                        <TextField
                          fullWidth
                          margin="normal"
                          multiline
                          rows="6"
                          onChange={e => setFormField("content", e)}
                          required
                          variant="outlined"
                          defaultValue={emptyInputForm.template}
                        />
                      </div>
                      <ContactChips
                        contactsData={contacts}
                        contact={contact}
                        setContact={setContact}
                        formData={formData}
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        addedUser={info ? info.email : null}
                      />
                    </div>
                  ) : activeStep === 1 ? (
                    // Art image input
                    <EmailImage
                      className={classes.image}
                      inventory={state.inventory}
                      selectedImages={selectedImages}
                      setSelectedImages={setSelectedImages}
                      formData={formData}
                    />
                  ) : activeStep === 2 ? (
                    <div>
                      <h4>Preview of your Email</h4>
                      <hr></hr>
                      <strong style={{ marginBottom: "20px" }}>
                        {formData.subject}
                      </strong>
                      <p>Hi (XXX),</p>
                      <p>
                        {formData.content.length > 0
                          ? formData.content
                          : formData.template}
                      </p>
                      <Grid
                        container
                        direction="row"
                        spacing={4}
                        style={{ marginBottom: "15px" }}
                        align="center"
                      >
                        {formData.images.length > 0 ? (
                          formData.images.map(image => (
                            <Grid item xs={2}>
                              <img
                                align="center"
                                justify="center"
                                src={image.add}
                                style={{
                                  maxWidth: "100px",
                                  maxHeight: "100px",
                                  margin: "auto",
                                  display: "block"
                                }}
                              />
                            </Grid>
                          ))
                        ) : (
                          <Grid item>
                            <strong>
                              Image not selected. It's highly recommended to
                              send your work when you're promoting!
                            </strong>
                          </Grid>
                        )}
                      </Grid>
                      <hr></hr>
                      <div style={{ marginTop: "20px" }}>
                        <strong>Enter your Gmail password:</strong>
                      </div>
                      <TextField
                        type="password"
                        placeholder="password"
                        margin="normal"
                        onChange={e => setFormField("password", e)}
                        required
                        variant="outlined"
                      />
                    </div>
                  ) : (
                    <h2>Your email is sent!</h2>
                  )}
                </Typography>
                <div
                  style={{
                    float: "right"
                  }}
                >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    disabled={
                      (activeStep === 0 && formData.subject === "") ||
                      (activeStep === 2 && formData.password === "")
                    }
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Send Email" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EmailModal;
