import "./Gallery.css";
import Card from "../card/Card";
import bg from "./images/background.svg";

function Gallery(props) {
  const addCards = () =>
    props.data.map((item) => <Card key={item.id} data={item} />);
  return (
    <section className="gallery">
      <div className="background-img">
        <div className="circle"></div>
        <img src={bg} alt="" />
      </div>
      <div className="container">
        <h1 className="title-section">Inspiration and Creativity</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam
          voluptatibus praesentium vitae debitis provident natus similique eaque
          ipsum molestias.
        </p>
        <div className="content-wrapper">{addCards()}</div>
      </div>
    </section>
  );
}

export default Gallery;
