import "./ServicesStyle.css";
import ServicesData from "./ServicesData";

function Services() {
  return (
    <div className="services">
      <h2>Services We Offer</h2>
      <p>We offer a wide range services to our customers.</p>
      <div className="servicecards">
        <div className="service-card">
          <ServicesData
            heading="Non-Disclosure Agreement(NDA)"
            text="We cater for customers with NDA's and assist them in getting transparent and accurate agreements"
          />
        </div>
        <div className="service-card">
          <ServicesData
            heading="Financial Agreements"
            text="We cater for customers with how a particular business project or plans is to be properly financed and arrange them properly "
          />
        </div>
        <div className="service-card">
          <ServicesData
            heading="License Agreements"
            text="We cater for customers with a document that describes the broad outlines of an agreement that two or more parties have reached"
          />
        </div>
        <div className="service-card">
          <ServicesData
            heading="Memorandum of understanding"
            text="We cater for customers with written contract between two parties wherein the property owner gives permission to another party to use their brand,patent or trademark"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
