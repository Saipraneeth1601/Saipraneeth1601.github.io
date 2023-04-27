import "./FooterStyles.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="footer-logo">
          <img alt="logo" src={logo} />
          <h1>S&R-Legal</h1>
        </div>
        <div className="sm">
          <a href="https:/facebook.com">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https:/instagram.com">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https:/reddit.com">
            <i className="fa-brands fa-reddit-square"></i>
          </a>
          <a href="https:/twitter.com">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="address">
          <h4>Address</h4>
          <p>
            Enquero Global LLP, Jothi Pinnacle,
            <br />
            Hyderabad, PIN : 500082.
          </p>
          <h4>Phone Number : </h4>
          <p>+91 9887665443</p>
          <h4>Email : </h4>
          <p>srservices@gmail.com</p>
        </div>
        <div className="belements">
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="https:/google.com">Issues</a>
          <a href="/">Reddit</a>
          <a href="/">Twitter</a>
        </div>
        <div className="belements">
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="belements">
          <h4>Others</h4>
          <a href="/">Terms and Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
