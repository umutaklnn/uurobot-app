import React from "react";
import "../assets/css/Footer.css";
import Marquee from "react-fast-marquee";

import sponsorErdemkaya from "../assets/img/sponsor-erdemkaya.png";
import sponsorHidropar from "../assets/img/sponsor-niluferhidropar.png";

export default function Footer() {
  return (
    <footer>
      <Marquee className="marquee">
        <h4>ROBOT TOPLULUĞU</h4>
        <h4>ROBOT TOPLULUĞU</h4>
        <h4>ROBOT TOPLULUĞU</h4>
      </Marquee>
      <div className="footer-row-2">
        <div className="footer-column">
          <img src={sponsorErdemkaya} />
          <img src={sponsorHidropar} />
        </div>
        <div className="footer-column">
          <a href="https://tr.linkedin.com/company/uluda%C4%9F-robot-toplulu%C4%9Fu">
            LinkedIN
          </a>
          <a href="https://www.instagram.com/uludagrobot/">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
