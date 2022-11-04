import React from "react";
import Drone from "../assets/img/drone-1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HomeProjects() {
  return (
    <>
      <div className="content1">
        <div className="card">
          <div className="card-img-box">
            <img src={Drone} className="card-img-item" alt="" />
          </div>
          <div className="card-text-box">
            <h1 className="card-h1">Rover</h1>
            <p className="card-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto dolore, obcaecati eius facere aut ipsa soluta explicabo
              pariatur, reiciendis deleniti, ducimus maiores nulla officia
              similique sunt! Facilis officia quia nesciunt!
            </p>
            <button className="card-button">Detay</button>
          </div>
        </div>
        <div className="card">
          <div className="card-img-box">
            <img src={Drone} className="card-img-item" alt="" />
          </div>
          <div className="card-text-box">
            <h1 className="card-h1">Rover</h1>
            <p className="card-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto dolore, obcaecati eius facere aut ipsa soluta explicabo
              pariatur, reiciendis deleniti, ducimus maiores nulla officia
              similique sunt! Facilis officia quia nesciunt!
            </p>
            <button className="card-button">Detay</button>
          </div>
        </div>
      </div>
    </>
  );
}
