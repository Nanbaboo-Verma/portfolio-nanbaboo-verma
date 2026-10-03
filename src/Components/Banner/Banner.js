import React, { useState, useEffect } from "react";
import "./Banner.scss";
import Card from "../Card/Card";
import Button from "../Button/Button";
import user from "../nanbabu.jpeg";
import nanbabu from "../../Assets/projects/nanbaboo-removebg-preview.png";

const Banner = () => {
  const [bio, setBio] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed for typing

  // Profile information
  const profiles = [
    { bio: "Frontend Developer" },
    { bio: "ReactJS Developer" },
    { bio: "Web Developer" },
    { bio: "UI Developer" },
  ];

  useEffect(() => {
    const currentBio = profiles[index].bio;

    const handleTyping = () => {
      if (!isDeleting && bio === currentBio) {
        setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
      } else if (isDeleting && bio === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % profiles.length); // Move to next bio
      } else {
        const nextBio = isDeleting
          ? currentBio.substring(0, bio.length - 1)
          : currentBio.substring(0, bio.length + 1);
        setBio(nextBio);
      }

      const nextSpeed = isDeleting ? 50 : 150; // Adjust speed for typing or deleting
      setTypingSpeed(nextSpeed);
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [bio, isDeleting, index, profiles, typingSpeed]);

  return (
    <section id="About" className="pro-banner">
      <div className="pro-banner__leftWrapper">
        <div>
          <h1 className="pro-banner__title">
            Hi, I’m <span>Nanbaboo Verma</span>
            <br /> a <span className="pro-banner__caption">{bio}</span>
          </h1>
          <p className="pro-banner__description">
            I use animation as a third dimension by which to simplify
            experiences and guiding through each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that
            enhance the user experience. Lorem ipsum dolor.
          </p>
        </div>
        <Card>
          <div className="pro-user-info-bottom">
            <div className="pro-user-info-">Download my curriculum vitae: </div>
            <div className="pro-userInfo__bottom">
              <Button content="DOWNLOAD CV" />
              <Button content="CONTACT ME" />
            </div>
          </div>
        </Card>
      </div>

      {/* <Card> */}
      <img src={nanbabu} alt="User" width="420px" />
      {/* </Card> */}
    </section>
  );
};

export default Banner;
