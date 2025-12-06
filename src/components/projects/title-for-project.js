"use client";
import Image from "next/image";
import React from "react";
import PageHeader from "../common/page-header/page-header";
import { Col, Container, Row } from "react-bootstrap";
import "./title-for-project.scss";
import { SectionHeader } from "../common/section-header/section-header";

const TitleForProject = ({ currentProject }) => {
  return (
    <section className="section padd-15 title-for-project">
      <Container>
        <PageHeader title={currentProject.title} />
        <Row className="project-info">
          <Col className="project-img">
            <Image
              src={`/img/projects/${currentProject.image}`}
              alt={currentProject.title}
              width={600}
              height={400}
              className="img-fluid"
            />
          </Col>
          <Col>
            <SectionHeader second_title={currentProject.technologies_title} />
            <p>{currentProject.technologies}</p>
          </Col>
        </Row>
        <Row>
          <SectionHeader second_title={currentProject.description_title} />
          <p>{currentProject.description}</p>
        </Row>
      </Container>
    </section>
  );
};

export default TitleForProject;
