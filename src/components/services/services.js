"use client";

import React from "react";
import { useTranslations } from "next-intl";
import ServiceCard from "./service-card";
import { getServicesData } from "@/helpers/misc";
import { Container, Row } from "react-bootstrap";
import PageHeader from "../common/page-header/page-header";
import "./services.scss";

const Services = () => {
  const t = useTranslations("services");
  const serviceItems = getServicesData(t);

  return (
    <section className="services section padd-15" id="services">
      <Container>
        <PageHeader title={t("services-title")} />
        <Row xs={12} sm={6} md={3}>
          {serviceItems.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
