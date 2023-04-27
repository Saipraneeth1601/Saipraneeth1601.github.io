import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Services from "../components/Services";
import Whatwedo from "../components/Whatwedo";

function Home() {
  return (
    <>
      <div className="homestyle">
        <Navbar />
        <Hero />
        <Whatwedo />
        <Trip />
        <Footer />
      </div>
    </>
  );
}

export default Home;
