"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getContactItems } from "@/helpers/misc";
import { Col, Row } from "react-bootstrap";

const ContactSocialMedia = () => {
  const t = useTranslations("contact.contact-info");
  const contactItems = getContactItems(t);

  return (
    <Row className="contact-info-item padd-15">
      {contactItems.map(({ key, icon: Icon, title, value, link }) => (
        <Col
          key={key}
          xs={12}    
          sm={6}     
          md={4}     
          lg={2}     
          className="contact-col"
        >
          <div className="icon">
            <Icon />
          </div>
          <Link href={link} target="_blank">
            <h4>{title}</h4>
            <p>{value}</p>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ContactSocialMedia;
