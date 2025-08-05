import Bestsellers from "../../components/Bestsellers/Bestsellers";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Information";
import Opinions from "../../components/Opinions/Opinions";
import Paragraph from "../../components/Paragraph/Paragraph";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <Information />
      <Opinions />
      <Paragraph />
      <Bestsellers />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
