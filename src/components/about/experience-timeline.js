import ExperienceItem from "./experience-item";
import { useTranslations } from "next-intl";

export default function ExperienceTimeline() {
  const t = useTranslations("about.experience");

  const experienceKeys = ["smyrnaEdu", "boyrazDisTicaret", "eligibleSchool"];

  return (
    <div className="timeline">
      {experienceKeys.map((key) => (
        <ExperienceItem
          key={key}
          duration={t(`${key}.duration`)}
          company_name={t(`${key}.company_name`)}
          position={t(`${key}.position`)}
       //   description={t(`${key}.description`)}
        />
      ))}
    </div>
  );
}
