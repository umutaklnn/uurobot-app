import React from "react";
import Logo from "./1-1.png";
export default function Header() {
  return (
    <section className="header">
      <div className="img-box">
        <img src={Logo} className="logo" alt="" />
      </div>
      <div className="ul-box">
        <ul className="ul-item">
          <li className="li-item">
            <a className="a-item" href="#">
              Projeler
            </a>
          </li>
          <li className="li-item">
            <a className="a-item" href="#">
              Hakkımızda
            </a>
          </li>
          <li className="li-item">
            <a className="a-item" href="#">
              Sponsorlar
            </a>
          </li>
          <li className="li-item">
            <a className="a-item" href="#">
              Ekip
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
