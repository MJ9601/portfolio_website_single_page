import "./Contact.css";
import { FaAt, FaPhoneVolume, FaSearchLocation } from "react-icons/fa";

function Contact() {
  return (
    <section className='contact'>
      <div className="container">
        <div className="left-side">
          <div className="content-wrapper">
            <h1 className="title">Let's discuss your project</h1>
            <div className="contanct-info">
              <div>
                <FaPhoneVolume className="icon" />
                <h2 className="text">(555) 501 5512</h2>
              </div>
              <div>
                <FaAt className="icon" />
                <h2 className="text">contact@gmail.com</h2>
              </div>
              <div>
                <FaSearchLocation className="icon" />
                <h2 className="text">5th Avenue NY</h2>
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
            <form>
              <input type="text" className="input-tag" id="name" />
              <label htmlFor="name" className="labels">
                Name
              </label>
              <input type="email" className="input-tag" id="email" />
              <label htmlFor="eamil" className="labels">
                Email
              </label>
              <input type="text" className="input-tag" id="subject" />
              <label htmlFor="subject" className="labels">
                Subject
              </label>
              <textarea
                name=""
                id="message"
                cols="30"
                rows="10"
                className="input-tag"
              ></textarea>
              <label htmlFor="message" className="labels">
                Message
              </label>
              <input type="submit" className="btn" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
