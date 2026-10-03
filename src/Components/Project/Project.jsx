import React from "react";
import Heading from "../Heading/Heading";
import { data } from "./data";
import "./Project.scss";

const Project = () => {
  return (
    <section id="Projects" className="pro-experience__section">
      <Heading title="OVER 3 YEARS OF EXPERIENCE" heading="Projects" />
      <div className="project-card_wrapper">
        {data.map((item) => {
          return (
            <div className="project-card bg-white">
              <div class="thumbnail">
                <img
                  src={item.thumbnail}
                  alt="Personal Portfolio Images"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="content p-20">
                <div className="category-info">
                  <div className="flex justify-space-between align-center">
                    <div className="project-name">{item.list}</div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-project"
                    >
                      View
                    </a>
                  </div>
                  <div className="category-list pt-18">
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
