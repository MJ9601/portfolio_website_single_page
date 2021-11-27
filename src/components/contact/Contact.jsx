import "./Contact.css";
import { FaAt, FaPhoneVolume, FaSearchLocation } from "react-icons/fa";
import React, { useState } from "react";

function Contact() {
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const [Sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((!UserName, !UserEmail)) {
      alert("Name and Email is required!");
      return;
    }

    const mailBody = {
      userName: UserName,
      userEmail: UserEmail,
      Subject: Subject,
      Message: Message,
    };

    await fetch("http://localhost:3002/postEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mailBody),
    });

    setMessage("");
    setSubject("");
    setUserEmail("");
    setUserName("");
    setSent(true);
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
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  className="input-tag"
                  id="name"
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
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
                  value={UserEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
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
                  value={Subject}
                  onChange={(e) => setSubject(e.target.value)}
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
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label htmlFor="message" className="labels">
                  Message
                </label>
              </div>
              <input type="submit" className="btn" value="Send" />
              {Sent && "Message sent .."}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
