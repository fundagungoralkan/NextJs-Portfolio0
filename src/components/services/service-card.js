"use client";
import React from "react";
const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-item padd-15">
      <div className="service-item-inner">
         <i className={`${icon} icon`}></i>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

