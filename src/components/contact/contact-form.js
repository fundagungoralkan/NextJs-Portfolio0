"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Col, Form, Row, Button, InputGroup } from "react-bootstrap";
import { FaRegUser, FaRegMessage } from "react-icons/fa6";
import { MdOutlineMailOutline, MdOutlineSubject } from "react-icons/md";

import ContactTitle from "./contact-title";
import { sendEmailForm } from "@/utils/email";

const ContactForm = () => {
  const t = useTranslations("contact");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    sendEmailForm(e.target, t);

    setValidated(false);
    e.target.reset();
  };

  return (
    <div className="contact-form">
      <ContactTitle
        formTitle={t("contact-form-title")}
        formSubtitle={t("contact-form-subtitle")}
      />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="g-2">
          {/* İsim Alanı */}
          <Col md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaRegUser />
              </InputGroup.Text>
              <Form.Control
                required
                type="text"
                name="name"
                placeholder={t("form.name")}
                minLength={2}
              />
              <Form.Control.Feedback type="invalid" className="feedback-input">
                {t("required-field")}
              </Form.Control.Feedback>
            </InputGroup>
          </Col>

          {/* E-posta */}
          <Col md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <MdOutlineMailOutline />
              </InputGroup.Text>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder={t("form.email")}
              />
              <Form.Control.Feedback type="invalid" className="feedback-input">
                {t("required-field")}
              </Form.Control.Feedback>
            </InputGroup>
          </Col>

          {/* Konu */}
          <Col md={12}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <MdOutlineSubject />
              </InputGroup.Text>
              <Form.Control
                required
                type="text"
                name="subject"
                placeholder={t("form.subject")}
              />
              <Form.Control.Feedback type="invalid" className="feedback-input">
                {t("required-field")}
              </Form.Control.Feedback>
            </InputGroup>
          </Col>

          {/* Mesaj */}
          <Col md={12}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaRegMessage />
              </InputGroup.Text>
              <Form.Control
                required
                as="textarea"
                name="message"
                placeholder={t("form.message")}
                rows={4}
                minLength={10}
              />
              <Form.Control.Feedback type="invalid" className="feedback-input">
                {t("required-field")}
              </Form.Control.Feedback>
            </InputGroup>
          </Col>

          {/* Gönder Butonu */}
          <Col md={12}>
            <Button type="submit" className="special-button">
              {t("form.submit")}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ContactForm;
