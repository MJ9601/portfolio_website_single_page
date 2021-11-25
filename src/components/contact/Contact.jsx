import "./Contact.css";
import { FaAt, FaPhoneVolume, FaSearchLocation } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rrinufn",
        "template_b0wyudg",
        formRef.current,
        "user_LJkGnkUmCnXpAnASNtx9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <div className="background">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
      <div className="container">
        <div className="left-side">
          <div className="content-wrapper">
            <h1 className="title">Let's discuss your project</h1>
            <div className="contanct-info">
              <div>
                <h2 className="text">
                  <FaPhoneVolume className="icon" />
                  <span>(555) 501 5512</span>
                </h2>
              </div>
              <div>
                <h2 className="text">
                  <FaAt className="icon" />
                  <span>contact@gmail.com</span>
                </h2>
              </div>
              <div>
                <h2 className="text">
                  <FaSearchLocation className="icon" />
                  <span>5th Avenue NY</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="content-wrapper">
            <h1 className="opening-text">
              Tell me about your project:{" "}
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus, a.
              </span>
            </h1>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  className="input-tag"
                  id="name"
                  name="user_name"
                />
                <label htmlFor="name" className="labels">
                  Name
                </label>
              </div>
              <div>
                <input
                  type="email"
                  className="input-tag"
                  id="email"
                  name="user_email"
                />
                <label htmlFor="eamil" className="labels">
                  Email
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="input-tag"
                  id="subject"
                  name="user_subject"
                />
                <label htmlFor="subject" className="labels">
                  Subject
                </label>
              </div>
              <div>
                <textarea
                  name=""
                  id="message"
                  cols="30"
                  rows="10"
                  className="input-tag"
                  name="message"
                ></textarea>
                <label htmlFor="message" className="labels">
                  Message
                </label>
              </div>
              <input type="submit" className="btn" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
