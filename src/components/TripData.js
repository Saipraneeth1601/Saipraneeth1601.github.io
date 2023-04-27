import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="trip-img">
        <img src={props.image} alt="image" />
      </div>
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
