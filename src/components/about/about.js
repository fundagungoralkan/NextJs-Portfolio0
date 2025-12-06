"use client";
import React from "react";
import { SectionHeader } from "../common/section-header/section-header";
import { useTranslations } from "next-intl";
import PageHeader from "../common/page-header/page-header";
import EducationTimeline from "./education-timeline";
import ExperienceTimeline from "./experience-timeline";
import ButtonComponent from "../common/buttons/button-component";
import { usePathname } from "next/navigation";
import { Container } from "react-bootstrap";
import "./timeline.scss";

const About = () => {
  const hx = useTranslations("about");

  const t = useTranslations("home");
  const currentPath = usePathname();
  const locale = currentPath.startsWith("/tr") ? "tr" : "en";
  const basePath = locale === "tr" ? "/tr" : "/en";

  return (
    <section className="about section" id="about">
      <Container className="h-100">
        <PageHeader title={hx("about_title")} />
        <h2>{hx("name")}</h2>
        <p className="about-description">{hx("description")}</p>

        <div className="button-group d-flex flex-wrap gap-5 mb-5">
          <ButtonComponent
            title={hx("button-download-cv")}
            path={`/cv/FundaCV-new.pdf`}
            rel="noopener noreferrer"
            download
          />

          <ButtonComponent
            title={t("button-hire-me")}
            path={`${basePath}/#contact`}
          />
        </div>
        <div className="timeline-section ">
          <div className="timeline-column-wrapper">
            <SectionHeader second_title={hx("about_section_title1")} />
            <div className="timeline-column ">
              <EducationTimeline />
            </div>
          </div>

          <div className="timeline-column-wrapper">
            <SectionHeader second_title={hx("about_section_title2")} />
            <div className="timeline-column ">
              <ExperienceTimeline />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
