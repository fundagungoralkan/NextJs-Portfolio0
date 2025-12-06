import { FaCalendarAlt } from "react-icons/fa";

export default function ExperienceItem({company_name,position,duration, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-icon" />
      <div className="timeline-content">
        <div className="timeline-date-wrapper">
  <FaCalendarAlt className="calendar-icon" />
  <span className="timeline-date">{duration}</span>
</div>

        <h3 className="timeline-title1">{company_name}</h3>
         <h4 className="timeline-title2">{position}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}