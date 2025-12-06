import React from "react";
import ContactForm from "./contact-form";
import ContactSocialMedia from "./contact-social-media";
import { Container } from "react-bootstrap";
import "./contact.scss";
import ContactTitle from "./contact-title";
import { useTranslations } from "next-intl";
import PageHeader from "../common/page-header/page-header";

const Contact = () => {
  const tTitle = useTranslations("contact");
  return (
    <section className="contact section" id="contact" >
      <Container>
        <PageHeader title={tTitle("contact-title")} />
        <ContactTitle
          formTitle={tTitle("contact-section-title")}
          formSubtitle={tTitle("contact-section-desc")}
        />
        <ContactSocialMedia />

        <ContactForm />
      </Container>
    </section>
  );
};

export default Contact;
