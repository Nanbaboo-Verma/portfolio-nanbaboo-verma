import React from "react";
import "./Button.scss";

const Button = ({ content }) => {
  return (
    <div className="pro-button">
      <button>{content}</button>
    </div>
  );
};

export default Button;
