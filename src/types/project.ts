import { images } from "./image";
import { member } from "./member";

export type project = {
  id: number;
  attributes: {
    name: string;
    content: string;
    images: images;
    members: member[];
  };
};

export type projectResponse = {
  data: project;
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
};
