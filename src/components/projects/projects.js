"use client";
import React from "react";
import { useTranslations } from "next-intl";

import { SectionHeader } from "../common/section-header/section-header";
import { Row } from "react-bootstrap";
import "./project.scss";
import PageHeader from "../common/page-header/page-header";
import { usePathname } from "next/navigation";
import { getProjectsData } from "@/helpers/misc";
import ProjectCard from "./project-card";
const Projects = () => {
  const t = useTranslations("projects");
  const path = usePathname();
  const projects = getProjectsData(t, path);

  return (
    <div className="project-section" id="projects" >
      <section className="container">
        <PageHeader title={t("projects-title")} />
        <SectionHeader second_title={t("projects-section-title")} />
        <Row className="g-5">
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              image={proj.image}
              altText={proj.title}
              link={proj.link}
            />
          ))}
        </Row>
      </section>
    </div>
  );
};
export default Projects;
