"use client";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import "./home-section.scss";
import { useTranslations } from "next-intl";

import TextComponent from "./text-component";

const HomeSection = () => {
  const t = useTranslations("home");

  return (
    <section className="home section" id="home">
      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col className="home-info">
            <TextComponent />
          </Col>
          <Col className="home-img">
            <Image
              src={`/img/profil/${t("image")}`}
              alt={t("imageAlt")}
              width={300}
              height={400}
              priority
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSection;
