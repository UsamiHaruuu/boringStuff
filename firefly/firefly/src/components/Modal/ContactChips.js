import React, { useState } from "react";
import { Grid, Chip, TextField, Divider } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));
const ContactChips = ({
  contactsData,
  contact,
  setContact,
  formData,
  addedUser
}) => {
  const classes = useStyles();
  const handleDelete = name => e => {
    setContact(
      contact.filter(cont => {
        return cont !== name;
      })
    );
    let deletedContact = contactsData.find(x => x.name === name);
    let filteredData = formData["sendTo"].filter(
      x => x !== deletedContact.email
    );
    formData["sendTo"] = filteredData;
  };
  const handleAdd = e => {
    if (e.target.innerText) {
      setContact(Array.from(new Set([...contact, e.target.innerText])));
      contactsData.map(x => {
        if (x.name === e.target.innerText) formData["sendTo"].push(x.email);
      });
    }
  };
  return (
    <Grid item xs={4}>
      <strong style={{ marginTop: "5px" }}>Selected Contacts</strong>
      <div style={{ margin: "15px" }} />
      <Autocomplete
        size="small"
        options={contactsData}
        getOptionLabel={option => option.name}
        style={{ width: 220 }}
        renderInput={params => (
          <TextField {...params} label="contacts" variant="outlined" />
        )}
        onChange={e => handleAdd(e)}
      />
      {contact.map(data => {
        return (
          <Chip
            key={Math.random()}
            size="small"
            icon={<FaceIcon />}
            label={data}
            name={data}
            onDelete={handleDelete(data)}
          />
        );
      })}
    </Grid>
  );
};

export default ContactChips;
