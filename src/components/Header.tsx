import assetLogo from "../assets/img/1-1.png";

import "../assets/css/Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <section className="header">
      <div className="img-box">
        <img src={assetLogo} className="logo" alt="" />
      </div>
      <div className="ul-box">
        <ul className="ul-item">
          <li className="li-item">
            <NavLink to="projects" className="a-item">
              Projeler
            </NavLink>
          </li>
          <li className="li-item">
            <NavLink to="about" className="a-item">
              Hakkımızda
            </NavLink>
          </li>
          <li className="li-item">
            <NavLink to="sponsors" className="a-item">
              Sponsorlar
            </NavLink>
          </li>
          <li className="li-item">
            <NavLink to="team" className="a-item">
              Takım
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
