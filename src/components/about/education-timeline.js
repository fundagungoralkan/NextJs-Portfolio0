"use client";
import EducationItem from "./education-item";
import { useTranslations } from "next-intl";

export default function EducationTimeline() {
  const hx = useTranslations("about.education");

  return (
    <div className="timeline">
      <EducationItem
     education_date={hx("education_date")}
  school_name={hx("school_name")}
  degree={hx("degree")}
      />
    </div>
  );
}
