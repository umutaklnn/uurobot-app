export type image = {
  data: {
    id: number;
    attributes: {
      url: string;
      name: string;
    };
  };
};

export type images = {
  data: {
    id: number;
    attributes: {
      url: string;
      name: string;
    };
  }[];
};
