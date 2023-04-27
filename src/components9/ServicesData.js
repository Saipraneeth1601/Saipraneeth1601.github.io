import "./ServicesStyle.css";

function ServicesData(props) {
  return (
    <div className="s-card">
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default ServicesData;
