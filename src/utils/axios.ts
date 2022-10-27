import axios from "axios";

const instance = axios.create({
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_STRAPI_KEY,
  },
  params: {
    populate: "image",
  },
});

export default instance;
