import { images } from "./image";
import { project } from "./project";

export type projectsResponse = {
  data: project[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
};
