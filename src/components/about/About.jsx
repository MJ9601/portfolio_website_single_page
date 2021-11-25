import workPic from "./images/workPlace.jpg";
import "./About.css";
import award from "./images/award.svg";

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="left-side">
          <div className="img-wrapper">
            <img src={workPic} alt="" />
          </div>
        </div>
        <div className="right-side">
          <div className="content-wrapper">
            <h1 className="title">About Me</h1>
            <p className="lead-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident ab cumque explicabo!
            </p>
            <p className="content-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              odit, suscipit sequi facere tenetur ea sed quod aut, doloribus
              delectus sint laudantium maxime. Ipsa, fugit.
            </p>
            <div className="content-img">
              <img src={award} alt="" />
              <div>
                <h4 className="img-lead">
                  International Website Design Awards 2020
                </h4>
                <p className="img-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Perferendis, magni!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
