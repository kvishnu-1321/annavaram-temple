import React from "react";
import "../../style.css";
import Carasoul from "../Carasoul";
import Footer from './Footer';
import newspaperimg from "../../Assets/images/newspaper-img.svg";
import arrowleft from "../../Assets/images/arrow-left-img.svg";
import g1 from "../../Assets/images/g1.png";
import g2 from "../../Assets/images/g2.png";
import g3 from "../../Assets/images/g3.png";
import g4 from "../../Assets/images/g4.png";
import g5 from "../../Assets/images/g5.png";
import g6 from "../../Assets/images/g6.png";


const Home = () => {
  return (
    <>
      <main>
        <div className="vvs-carousal">
          <Carasoul />
        </div>
        <div className="vvs-marquee">
          <div className="vvs-marq-news">
            <img
              src={newspaperimg}
              alt="newspaperimg"
              style={{ height: "20px", width: "20px" }}
            />
            <span>News Updates</span>
          </div>
          <marquee>
            please watch Paroksha Sevas on Youtube:
            http://youtube.com/KankaDurgaTemple
          </marquee>
          <button className="vvs-marq-button">
            view all
            <img
              src={arrowleft}
              alt="arrowleft"
              style={{ height: "20px", width: "20px" }}
            />
          </button>
        </div>
      </main>
      <section>
        <h1 className="vvs-gallory-text">Photo Gallory</h1>
        <div className="vvs-gallory">
          <div className="vvs-gallory-left">
            <img src={g1} alt="g1" />
            <img src={g2} alt="g2" />
          </div>

          <div className="vvs-gallory-right">
            <img
              src={g3}
              alt="g3"
              // style={{ height: "20px", width: "20px" }}
            />
            <img
              src={g4}
              alt="g4"
              // style={{ height: "20px", width: "20px" }}
            />
            <img
              src={g5}
              alt="g5"
              // style={{ height: "20px", width: "20px" }}
            />
            <img
              src={g6}
              alt="g6"
              // style={{ height: "20px", width: "20px" }}
            />
          </div>
        </div>
      </section>
      <Footer />
      
    </>
  );
};

export default Home;
