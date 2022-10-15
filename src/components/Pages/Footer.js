import React from "react";
import newspaper from "../../Assets/images/newspaper.svg";
import email from "../../Assets/images/sendimg.svg";
import mail from "../../Assets/images/mail.svg";
import cellphone from "../../Assets/images/cellphone.svg";
import googleplay from "../../Assets/images/google-play.svg";
import appstore from "../../Assets/images/app-store.svg";
import faceimg from "../../Assets/images/face-sm-img.png";
import instaimg from "../../Assets/images/insta-sm-img.png";
import youtubeimg from "../../Assets/images/youtube-sm-img.png";
import twitterimg from "../../Assets/images/twitter-sm-img.png";
import develop from "../../Assets/images/develop.svg";

const Footer = () => {
  return (
    <footer>
      <div className="vvs-footer">
        <div className="vvs-footer-top">
          <div className="vvs-footer-top-left">
            <div>
              <img src={newspaper} alt="newspaper" />
              <span>Subscribe our NewsLetter</span>
            </div>
            <div className="vvs-email">
              <input type="email" placeholder="enter email" />
              <img src={email} alt="email" className="vvs-mail-right" />
              <img src={mail} alt="mail" className="vvs-mail-left" />
            </div>
          </div>
          <div className="vvs-footer-top-right">
            <div>
              <img src={cellphone} alt="cellphone" />
              <span>Download Mobile App</span>
            </div>
            <img src={googleplay} alt="email" />
            <img src={appstore} alt="email" />
          </div>
        </div>
        <div className="vvs-footer-bottom">
          <div className="vvs-footer-col1">
            <h1>About</h1>
            <ul className="vvs-footer-list">
              <li>
                <a href={""}>Overview</a>
              </li>
              <li>
                <a href={""}>The Temple</a>
              </li>
              <li>
                <a href={""}>Temple Story</a>
              </li>
              <li>
                <a href={""}>General Information</a>
              </li>
            </ul>
          </div>
          <div className="vvs-footer-col2">
            <h1>Sevas & Darshanam</h1>
            <ul className="vvs-footer-list">
              <li>
                <a href={""}>Overview</a>
              </li>
              <li>
                <a href={""}>Darshanam</a>
              </li>
              <li>
                <a href={""}>Pratyaksha Seva</a>
              </li>
              <li>
                <a href={""}>Paroksha Seva</a>
              </li>
              <li>
                <a href={""}>Saswata Seva</a>
              </li>
            </ul>
          </div>
          <div className="vvs-footer-col3">
            <h1>Donations</h1>
            <ul className="vvs-footer-list">
              <li>
                <a href={""}>Overview</a>
              </li>
              <li>
                <a href={""}>e-Hundi</a>
              </li>
              <li>
                <a href={""}>Devasthanam Trust</a>
              </li>
              <li>
                <a href={""}>Anna Prasadam Trust</a>
              </li>
              <li>
                <a href={""}>Go Samrakshana Trust</a>
              </li>
              <li>
                <a href={""}>Sri Kanaka Durga TV</a>
              </li>
              <li>
                <a href={""}>Swachh SriKanakaDurga Trust</a>
              </li>
            </ul>
          </div>
          <div className="vvs-footer-col4">
            <h1>Online Booking</h1>
            <ul className="vvs-footer-list">
              <li>
                <a href={""}>Overview</a>
              </li>
              <li>
                <a href={""}>Darshanam Tickets</a>
              </li>
              <li>
                <a href={""}>Pratyaksha Seva Tickets</a>
              </li>
              <li>
                <a href={""}>Paroksha Seva Booking</a>
              </li>
              <li>
                <a href={""}>Prasadam</a>
              </li>
              <li>
                <a href={""}>Accommodation</a>
              </li>
              <li>
                <a href={""}>Kalyana Katta Tickets</a>
              </li>
              <li>
                <a href={""}>Anna Prasadam Tickets</a>
              </li>
              <li>
                <a href={""}>Kalyana Mandapam Booking</a>
              </li>
            </ul>
          </div>
          <div className="vvs-footer-col5">
            <h1>Media Room</h1>
            <ul className="vvs-footer-list">
              <li>
                <a href={""}>Overview</a>
              </li>
              <li>
                <a href={""}>Media Kit</a>
              </li>
              <li>
                <a href={""}>Gallery</a>
              </li>
              <li>
                <a href={""}>What's new</a>
              </li>
              <li>
                <a href={""}>Press</a>
              </li>
              <li>
                <a href={""}>RTI Act</a>
              </li>
            </ul>
          </div>
          <div className="vvs-footer-col6">
            <h1>Support</h1>
            <ul className="vvs-footer-list">
              <li>
                <a href={""}>Overview</a>
              </li>
              <li>
                <a href={""}>FAQs</a>
              </li>
              <li>
                <a href={""}>Facilities to Pilgrims</a>
              </li>
              <li>
                <a href={""}>Connectivity</a>
              </li>
              <li>
                <a href={""}>Call Center</a>
              </li>
              <li>
                <a href={""}>Live</a>
              </li>
            </ul>
          </div>
          <div className="vvs-footer-col7">
            <h1>Legalities</h1>
            <ul className="vvs-footer-list">
              <li>
                <a href={""}>Privacy Policy</a>
              </li>
              <li>
                <a href={""}>Refund Policy</a>
              </li>
              <li>
                <a href={""}>Trademarks</a>
              </li>
              <li>
                <a href={""}>Terms and Conditions</a>
              </li>
              <li>
                <a href={""}>Cautionary Notice</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="vvs-footer-copyright">
          <div className="vvs-footer-copy-left">
            <p>
              Copyright © 2022 Sri Durga Malleswara Swamy Varla Devasthanam. All
              Rights Reserved.
            </p>
            <div>
              <img src={faceimg} alt={faceimg} />
              <img src={instaimg} alt={instaimg} />
              <img src={youtubeimg} alt={youtubeimg} />
              <img src={twitterimg} alt={twitterimg} />
            </div>
          </div>

          <div className="vvs-footer-copy-right">
            <span>Developed by</span>
            <img src={develop} alt={develop} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
