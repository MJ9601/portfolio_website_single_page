import "./Card.css";

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
          <img src={process.env.PUBLIC_URL + props.data.imgUrl} alt="" />
        </div>
      </a>
    </div>
  );
}

export default Card;
