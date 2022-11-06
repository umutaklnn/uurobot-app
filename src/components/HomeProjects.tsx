import React from "react";
import Drone from "../assets/img/drone-1.png";
import { useQuery } from "@tanstack/react-query";
import getProjects from "../utils/getProjects";
import { Link } from "react-router-dom";

export default function HomeProjects() {
  const { data, isLoading, isError } = useQuery(["projects"], getProjects);

  console.log(data);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const nodes = data?.data.map((item) => {
    console.log("data");
    return (
      <ProjectNode
        key={item.id}
        name={item.attributes.name}
        content={item.attributes.content}
        image={item.attributes.images.data[0].attributes.url}
        id={item.id}
      />
    );
  });

  return (
    <>
      <div className="content1">{nodes}</div>
    </>
  );
}

function ProjectNode(props: {
  name: string;
  content: string;
  image: string;
  id: number;
}) {
  return (
    <div className="card">
      <div className="card-img-box">
        <img src={props.image} className="card-img-item" alt="" />
      </div>
      <div className="card-text-box">
        <h1 className="card-h1">{props.name}</h1>
        <p className="card-p">{props.content}</p>
        <Link className="card-button" to={`projects/${props.id}`}>
          Detay
        </Link>
      </div>
    </div>
  );
}
