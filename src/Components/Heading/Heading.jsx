import React from "react";
import "./Heading.scss";

const Heading = ({ title, heading }) => {
  return (
    <div className="pro-heading">
      <h2>{heading}</h2>
      <span>{title}</span>
    </div>
  );
};

export default Heading;
