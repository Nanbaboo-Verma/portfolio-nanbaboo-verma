import React from "react";
import "./Container.scss";
import Banner from "../Banner/Banner";
import Divider from "../Divider";
// import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";

const Container = () => {
  return (
    <div className="pro-container">
      <Banner />
      <Divider />
      <Skills />
      <Divider />
      <Project />
      <Divider />
      <Education />
      <Divider />
      <Contact />
      <Divider />
    </div>
  );
};

export default Container;
