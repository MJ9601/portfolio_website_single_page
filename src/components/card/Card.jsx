import "./Card.css";
import IMG from "./img.png";

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      <a href={props.data.url} target="_blank" rel="noreferrer">
        <div className="card-img">
          <img src={props.data.imgUrl} alt="" />
        </div>
      </a>
    </div>
  );
}

export default Card;
