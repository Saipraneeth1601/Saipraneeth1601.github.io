import "./TripStyles.css";
import TripData from "./TripData";
import trusted from "../assets/trusted.png";
import successful from "../assets/successful.png";
import recovered from "../assets/recovered.png";
import business from "../assets/business.png";

function Trip() {
  return (
    <div className="trip">
      <h1 className="main-heading">Every Client Matters</h1>
      <p>We prioratize every case and keep our clients safe.</p>
      <div className="cards">
        <div className="trip-card">
          <TripData image={trusted} heading="170,000+" text="Trusted clients" />
        </div>
        <div className="trip-card">
          <TripData image={recovered} heading="N200B" text="Recovered" />
        </div>
        <div className="trip-card">
          <TripData image={successful} heading="99%" text="Successful cases" />
        </div>
        <div className="trip-card">
          <TripData image={business} heading="12k" text="Business cases" />
        </div>
      </div>
    </div>
  );
}

export default Trip;
