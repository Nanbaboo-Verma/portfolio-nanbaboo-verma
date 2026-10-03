import React from "react";
import "./Education.scss";
import { educationData } from "./data";

const Education = () => {
  return (
    <section id="Education" className="education-section">
      {/* Background decorations */}
      <div className="circle-decoration"></div>

      <div className="dots-decoration">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="title-wrapper">
            <div className="graduation-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>

            <h2>Education</h2>
          </div>

          <p>MY SCHOOL AND COLLEGE EDUCATION</p>

          <div className="header-line">
            <span></span>
            <b></b>
            <span></span>
          </div>
        </div>

        {/* Education Cards */}
        <div className="education-grid">
          {educationData.map((education) => (
            <article className="education-card" key={education.id}>
              {/* Image */}
              <div className="education-image">
                <img src={education.image} alt={education.college} />

                <div className="year-badge">{education.year}</div>
              </div>

              {/* Content */}
              <div className="education-content">
                <div className="small-icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>

                <h3>{education.degree}</h3>

                {/* Course */}
                <div className="course-tag">
                  <i className="fa-solid fa-desktop"></i>

                  <span>{education.course}</span>
                </div>

                {/* College */}
                {/* <h4>{education.college}</h4> */}

                {/* Location */}
                {/* <div className="location">
                  <i className="fa-solid fa-location-dot"></i>

                  <span>{education.location}</span>
                </div> */}

                {/* Divider */}
                <div className="content-divider"></div>

                {/* Description */}
                <p>{education.description}</p>

                {/* Status */}
                {/* <div
                  className={`status ${
                    education.status === "Completed" ? "completed" : "pursuing"
                  }`}
                >
                  <span className="status-dot"></span>

                  {education.status}
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

// import React from "react";
// import "./Education.scss";
// import Heading from "../Heading/Heading";
// import Card from "../Card/Card";
// import Button from "../Button/Button";

// const Education = () => {
//   const data = [
//     {
//       thumbnail:
//         "https://lh3.googleusercontent.com/p/AF1QipMYic8aTXiyBRqJxEoG4b4DhAMcyz5R4iTOCaxa=s680-w680-h510",
//       list: "Development",
//       course: "Bachelor of Computer Applications - BCA",
//       link: "https://prsuniv.ac.in/",
//       passingYear: "2021",
//     },
//     {
//       thumbnail:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6M_WTuwrKkBQSUFSkqDTqqaNcdA6qSi5ovVjbkdHubXcMPGA5qkPEK1VV&s=10",
//       list: "Development",
//       course: "Master of Computer Applications - MCA",
//       link: "https://www.iul.ac.in/",
//       passingYear: "2027",
//     },
//   ];
//   return (
//     <section id="Education" className="education-section">
//       <Heading title="My school and collage education" heading="Education" />
//       <div className="flex gap-2">
//         {data.map((item) => {
//           return (
//             <Card style={{ padding: "0" }}>
//               <div className="flex gap-2">
//                 <div class="thumbnails">
//                   <a href={item.link} target="_blank">
//                     <img
//                       src={item.thumbnail}
//                       alt="Personal Portfolio Images"
//                       width="100%"
//                       height="100%"
//                     />
//                   </a>
//                 </div>
//                 <div className="content flex justify-space-between align-center w-100">
//                   <div>
//                     <span className="date">{item.passingYear}</span>
//                     <h4 className="course-name">{item.course}</h4>
//                     <p>Information Technology</p>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Education;
