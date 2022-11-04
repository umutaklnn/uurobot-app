import { projectsResponse } from "../types/projects";
import axios from "./axios";

const getProjects = async () => {
  const resp = await axios.get(import.meta.env.VITE_STRAPI_URL + "/projects");

  return resp.data as projectsResponse;
};

export default getProjects;
