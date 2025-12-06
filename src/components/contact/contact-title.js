import React from "react";
import "./contact-title.scss";
const ContactTitle = ({ formTitle, formSubtitle }) => {
  return (
    <>
      <h3 className="contact-title padd-15">{formTitle}</h3>
      <h4 className="contact-sub-title padd-15">{formSubtitle}</h4>
    </>
  );
};
export default ContactTitle;
