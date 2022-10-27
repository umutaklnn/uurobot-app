import React from "react";
import Drone from '../assets/img/drone-1.png'

export default function HomeProjects() {
  return (
    <section className="home-projects">
      <div className="card">
        <div className="card-img-div">
          <img src={Drone} className="card-img-item" alt="" />
        </div>
        <div className="card-content-div">
          <h1 className="card-h1">
            Rover
          </h1>
          <p className="card-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab
            consequatur tenetur temporibus asperiores, pariatur perferendis
            libero illum veritatis? Nemo fugiat quae quis sed veritatis,
            reprehenderit ex odio iusto ipsum.
          </p>
          <button className="card-button">Detaylar</button>
        </div>
      </div>
    </section>
  );
}
