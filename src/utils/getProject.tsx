import { projectResponse } from "../types/project";

import axios from "./axios";

const getProject = async (id: number) => {
  const resp = await axios.get(
    import.meta.env.VITE_STRAPI_URL + "/projects/" + id
  );

  return resp.data as projectResponse;
};

export default getProject;
