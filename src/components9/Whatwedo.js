import "./Whatwedo.css";
import image1 from "../assets/image1.png";
function Whatwedo() {
  return (
    <div className="wwdcont">
      <div className="wheading">
        <h1>What We Do</h1>
        <p> ahfaef aunad vejaenvjwrne bjrwnb rwbnwrb wrjnblrw b</p>
        <p>ajebavj ejkvrejkwrbrwjbrbj rwb</p>
        <p>eakjbvbe rdbv</p>
      </div>
      <div className="wcontainer">
        <div className="welements">
          <div className="wtitle">
            <img alt="image1" src={image1} />
            <h2>Legal services</h2>
          </div>
          <p>We provide all types of legal services</p>
        </div>
        <div className="welements">
          <div className="wtitle">
            <img alt="image1" src={image1} />
            <h2>Agreements</h2>
          </div>
          <p>We aevk akgn provide all types of legal services</p>
        </div>
        <div className="welements">
          <div className="wtitle">
            <img alt="image1" src={image1} />
            <h2>Secure & Privacy</h2>
          </div>
          <p>Weadv ad bprovide all t sdklv esnv lkedv pes of legal services</p>
        </div>
      </div>
    </div>
  );
}
export default Whatwedo;
