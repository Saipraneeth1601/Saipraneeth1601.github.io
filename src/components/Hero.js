import "./HeroStyles.css";
import homeimg from "../assets/homeimg.png";
import businessman from "../assets/businessman.jpg";
import court from "../assets/court.jpg";
import books1 from "../assets/books1.jpg";
import { Carousel } from "react-bootstrap";
import Navbar from "./Navbar.js";

function Hero(props) {
  return (
    <>
      <div className="carousal-item">
        <Carousel interval={2000} className="carousel-fade">
          <Carousel.Item className="c-item">
            <img className="d-block w-100" src={books1} alt="First slide" />
            <Carousel.Caption className="c-caption">
              <h3>Welcome to S&R-Legal</h3>
              <p>We take the burden off your legal troubles.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="c-item">
            <img
              className="d-block w-100"
              src={businessman}
              alt="Second slide"
            />
            <Carousel.Caption className="c-caption c-caption2">
              <h3>Effortless Legal Help</h3>
              <p>
                Get Access to a Wide Range of Legal Documents Anytime, Anywhere.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="c-item">
            <img className="d-block w-100" src={court} alt="Third slide" />
            <Carousel.Caption className="c-caption">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Hero;
