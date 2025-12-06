"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { useTranslations } from "next-intl";
import "./skills.scss";
import PageHeader from "../common/page-header/page-header";
import { getSkillsData } from "@/helpers/misc";

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="loop-slider__inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const chunkIntoThreeRows = (array) => {
  const perRow = Math.ceil(array.length / 3);
  const result = [];
  for (let i = 0; i < 3; i++) {
    result.push(array.slice(i * perRow, (i + 1) * perRow));
  }
  return result;
};

const Skills = () => {
  const t = useTranslations("skills");
  const skillsItems = getSkillsData(t);

  const rows = chunkIntoThreeRows(skillsItems);

  return (
    <section className="skills-section" id="skills">
      <Container className="h-100">
        <PageHeader title={t("skills-title")} />

        <div className="slider">
          {rows.map((row, index) => (
            <InfiniteLoopSlider
              key={index}
              duration={70000}
              reverse={index % 2 !== 0}
            >
              <div className="slider-row">
                {row.map((item, idx) => (
                  <div className="slider-item" key={idx}>
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </InfiniteLoopSlider>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
