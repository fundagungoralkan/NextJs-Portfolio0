"use client";
import React from "react";
import Image from "next/image";
import "./project.scss";
import Link from "next/link";

const ProjectCard = ({ image, altText, link }) => {
  return (
    <Link href={link} className="project-item">
      <div className="project-item_image">
        <Image
          src={`/img/projects/${image}`}
          alt={altText}
          width={600}
          height={400}
          className="img-fluid"
        />
        {/* Hover olunca görünecek katman */}
        <div className="overlay">
          <h3 className="project-title">{altText}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
