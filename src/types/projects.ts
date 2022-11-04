import { images } from "./image";

type project = {
  id: number;
  attributes: {
    name: string;
    content: string;
    images: images;
  };
};

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
