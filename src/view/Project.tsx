import { useParams } from "react-router-dom";
import getProject from "../utils/getProject";
import { useQuery } from "@tanstack/react-query";

export default function Projects() {
  const { id } = useParams<{ id: string }>();

  if (!id) return <div>Project not found</div>;

  // get react query to fetch the project
  const {
    data: project,
    isLoading,
    isError,
  } = useQuery(["project", id], () => getProject(Number(id)));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const leaderData = project.data.attributes.members[0];

  console.log(project);

  return (
    <>
      <div className="content1_projects">
        <div className="card">
          <div className="card-img-box">
            <img
              src={project.data.attributes.images.data[0].attributes.url}
              className="card-img-item"
              alt=""
            />
          </div>
          <div className="card-text-box">
            <h1 className="card-h1">{project.data.attributes.name}</h1>
            <p className="card-p">{project.data.attributes.content}</p>
          </div>
        </div>
      </div>
      <div>
        <h1>Proje Hakkında</h1>
        <p className="about-div projects_about">
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
      <div className="team_members">
        <h1>Ekip</h1>
        <div className="leader">
          <div className="item_card">Abc xys</div>
        </div>
        <div className="members">
          <div className="item_card">Abc xys</div>
          <div className="item_card">Abc xys</div>
          <div className="item_card">Abc xys</div>
          <div className="item_card">Abc xys</div>
          <div className="item_card">Abc xys</div>
        </div>
        <div className="members">
          <div className="item_card">Abc xys</div>
          <div className="item_card">Abc xys</div>
          <div className="item_card">Abc xys</div>
          <div className="item_card">Abc xys</div>
          <div className="item_card">Abc xys</div>
        </div>
        <div className="members">
          <div className="item_card">Abc xys</div>
          <div className="item_card">Abc xys</div>
          <div className="item_card">Abc xys</div>
          <div className="item_card">Abc xys</div>
          <div className="item_card">Abc xys</div>
        </div>
      </div>
    </>
  );
}
