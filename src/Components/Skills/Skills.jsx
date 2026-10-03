import React from "react";
import Card from "../Card/Card";
import Heading from "../Heading/Heading";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      framework: ["React.js", "Next.js", "Express.js"],
    },
    {
      languages: ["JavaScript", "TypeScript"],
    },
    {
      design: [
        "HTML",
        "CSS",
        "SASS/SCSS",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      libraries: [
        "Redux",
        "Redux Toolkit",
        "jQuery",
        "React Router",
        "Formik",
        "Yup",
      ],
    },
    {
      uiLibraries: [
        "Material UI",
        "Ant Design",
        "Chakra UI",
        "Shopify Polaris",
      ],
    },
    {
      backend: ["Node.js", "Express.js"],
    },
    {
      database: ["MongoDB", "MySQL", "SQL"],
    },
    {
      tools: ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools", "npm"],
    },
    {
      testing: ["Jest", "React Testing Library", "Cypress"],
    },
    {
      buildTools: ["Vite", "Webpack", "Babel"],
    },
    {
      concepts: [
        "REST API",
        "JSON",
        "AJAX",
        "Async/Await",
        "Responsive Web Design",
        "Cross-Browser Compatibility",
      ],
    },
  ];

  const colors = [
    "#D9EEE1",
    "#96D4D4",
    "#bfd4f8",
    "#d4ffe4",
    "#cac8f1",
    "#FFC0C7",
    "#FFF4A3",
    "#F5F5DC",
    "#F0F8FF",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="pro-skill">
      <Heading title="learned more skills" heading="Skills" />

      <div className="pro-skill__list">
        {skills.map((skill, index) => {
          const title = Object.keys(skill)[0];
          const skillItems = Object.values(skill)[0];

          return (
            <div className="skill-group" key={index}>
              <h5 className="skill-title">{title}</h5>

              <div className="skill-items flex wrap gap-2">
                {skillItems.map((item, index) => (
                  <Card
                    key={index}
                    style={{
                      backgroundColor: getRandomColor(),
                    }}
                  >
                    {item}
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
