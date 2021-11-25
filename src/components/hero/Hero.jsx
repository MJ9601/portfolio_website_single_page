import "./Hero.css";
import backGround from "./images/blob.svg";
import person from "./images/person.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="back-svg">
        <img src={backGround} alt="" />
      </div>
      <div className="container">
        <div className="content-wrapper">
          <div className="left-side">
            <h3 className="welcoming-text">Hey, I am </h3>
            <h1 className="name-tag">John Doe</h1>
            <div className="content-holder">
              <h3 className="content-header">Web Developer</h3>
              <h3 className="content-header">Web Design</h3>
              <h3 className="content-header">Front-end/Back-end</h3>
              <h3 className="content-header">content Creator</h3>
            </div>
            <p className="content-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas,
              quam quasi deleniti officia porro, iusto maxime omnis ut sed
              molestias labore placeat ipsam nostrum fuga nihil harum?
            </p>
          </div>
          <div className="right-side">
            <img src={person} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
