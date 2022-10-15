import React from "react";
import RouterList from "./Routes/Routes";
import { BrowserRouter as Router, Link } from "react-router-dom";
import routMapMini from "./Routes/Routemapmini";
import "../style.css";
import cartimg from "../Assets/images/cartimg.svg";
import search from "../Assets/images/search.svg";
import logoimg from "../Assets/images/logoimg.png";
import faceimg from "../Assets/images/face-sm-img.png";
import instaimg from "../Assets/images/insta-sm-img.png";
import youtubeimg from "../Assets/images/youtube-sm-img.png";
import twitterimg from "../Assets/images/twitter-sm-img.png";

const Navbar = () => {
  return (
    <Router>
      <div className="vvs-header-top">
        <div className="vvs-header-topleft">
          <img src={faceimg} alt={faceimg} />
          <img src={instaimg} alt={instaimg} />
          <img src={youtubeimg} alt={youtubeimg} />
          <img src={twitterimg} alt={twitterimg} />
        </div>
        <div className="vvs-header-topright">
          <ul>
            <li>SRI KANAKADURGA TV</li>
            <li>ENGLISH</li>
            <li>PRINT A TICKET</li>
            <li>SIGN IN/SIGN UP</li>
          </ul>
        </div>
      </div>

      <div className="vvs-navbar">
        <div className="vvs-navbottom-left">
          <img src={logoimg} alt={logoimg} />
        </div>
        <div className="vvs-navbottom-right">
          <div className="vvs-top-nav">
            <ul>
              <li>volunteer</li>
              <li>shop</li>
              <li>
                {" "}
                <img src={cartimg} alt={cartimg} />{" "}
              </li>
              <li>
                <img src={search} alt={search} />
              </li>
            </ul>
          </div>
          <nav>
            <ul className="vvs-bottom-nav">
              <li>
                <Link to={routMapMini.AboutPage}> About </Link>
              </li>

              <li>
                <Link to={routMapMini.DonationPage}> Donations </Link>
              </li>
              <li>
                <Link to={routMapMini.SevasPage}> sevas and darshanam </Link>
              </li>
              <li>
                <Link to={routMapMini.OnlineBookingPage}> Online Booking </Link>
              </li>
              <li>
                <Link to={routMapMini.MediaRoomPage}> Media Room </Link>
              </li>
              <li>
                <Link to={routMapMini.SupportPage}> Support</Link>
              </li>

              <li>
                <Link to={routMapMini.SignInPage}>sign in/sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <RouterList />
    </Router>
  );
};

export default Navbar;
