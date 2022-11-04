import React from "react";
import Drone from "../assets/img/drone-1.png";

export default function Projects() {
  return (
    <>
      <div className="content1_projects">
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
      <div>
        <p className="about-div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          fringilla suscipit posuere. Mauris commodo dolor justo, ac vehicula
          justo congue eget. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Nullam et lobortis turpis, non
          tristique tortor. Nam neque tellus, semper ac risus eu, aliquet
          gravida ligula. Nulla id magna nec mauris cursus posuere vitae vel
          ipsum. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Etiam eu viverra est, nec lacinia dui. Morbi
          mollis luctus tempor. Cras sit amet ante justo. Suspendisse potenti.
          Fusce sit amet purus id sem volutpat fringilla at sed velit. Sed
          euismod sodales ante, sed gravida ligula congue in. Phasellus cursus
          nisl sapien, sit amet iaculis nisi convallis ut. Vivamus rutrum
          venenatis efficitur. Sed in vestibulum quam. Curabitur sed diam
          consequat, facilisis nisi eu, varius risus. Aenean sit amet sem augue.
          Nam non viverra orci. Suspendisse imperdiet lorem eget lacus faucibus
          porttitor vitae at mauris. Nunc est velit, ullamcorper in blandit ac,
          sodales sed metus.
        </p>
      </div>
    </>
  );
}
