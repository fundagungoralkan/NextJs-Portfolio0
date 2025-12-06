import { FaCalendarAlt } from "react-icons/fa";

export default function EducationItem({education_date, school_name, degree }) {
  return (
    <div className="timeline-item">
      <div className="timeline-icon" />
      <div className="timeline-content">
             <div className="timeline-date-wrapper">
  <FaCalendarAlt className="calendar-icon" />
  <span className="timeline-date">{education_date}</span>
</div>
        <h3 className="timeline-title3">{school_name}</h3>
        <p className="education-desc">{degree}</p>
      </div>
    </div>
  );
}