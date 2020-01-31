import React from "react";
import Contact from "./Contact";

const ContactList = ({ contactData }) => {
  return contactData.map(contact => <Contact contact={contact} />);
};

export default ContactList;
