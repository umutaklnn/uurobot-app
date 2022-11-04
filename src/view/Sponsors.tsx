import React from "react";
import Drone from "../assets/img/drone-1.png";

export default function Sponsors() {
  return (
    <>
      <h1 className="sponsor_title">Sponsorlar</h1>
      <div className="img_div">
        <img src={Drone} className="img_item" alt="" />
        <img src={Drone} className="img_item" alt="" />
      </div>
    </>
  );
}
