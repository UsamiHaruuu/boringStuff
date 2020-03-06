/* eslint-disable indent */
import React, { Fragment, useState } from "react";
import EmailModal from "./EmailModal";
import { Button } from "@material-ui/core";
import "./ModalManager.css";

const ModalManager = ({
  currUser,
  inventory,
  contacts,
  info,
  contact,
  setContact,
  formData,
  setFormData
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Fragment>
      <EmailModal
        state={{
          modalOpen,
          setModalOpen,
          currUser,
          inventory,
          contacts,
          info,
          contact,
          setContact,
          formData,
          setFormData
        }}
      />

      <Button
        style={{ maxHeight: "30px" }}
        className="add-button"
        variant="contained"
        onClick={() => setModalOpen(true)}
      >
        Send Email
      </Button>
    </Fragment>
  );
};

export default ModalManager;
