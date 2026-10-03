import React from "react";
import Heading from "../Heading/Heading";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="Contact" className="contact">
      <Heading
        title="Feel Free to contact us any time. We will get back to you as soon as we can!."
        heading="Contact US"
      />

      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Feel Free to contact us any time. We will get back to you as soon as
            we can!.
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i>
              <p>Ashok Nagar sector16, Noida, Uttar Pradesh 201309</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i>
              <p>vermananbabu54@gmail.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>
              <p>+91-95XXXXXX53</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <div className="input-container">
              <label for="">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                autoComplete="off"
                placeholder="Enter name"
              />
            </div>
            <div className="input-container">
              <label for="">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter email id"
              />
            </div>
            <div className="input-container">
              <label for="">Phone</label>
              <input
                type="tel"
                name="phone"
                className="input"
                placeholder="Enter phone number"
              />
            </div>
            <div className="input-container textarea">
              <label for="">Message</label>
              <textarea
                name="message"
                className="input"
                placeholder="Write a message"
              ></textarea>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
