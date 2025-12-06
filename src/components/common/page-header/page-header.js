"use client";
import React from "react";
import "./page-header.scss"; 

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <h1 className="title-page-header">{title}</h1>
      <div className="red-lines">
        <div className="line big" />
        <div className="line small" />
      </div>
    </div>
  );
};

export default PageHeader;
