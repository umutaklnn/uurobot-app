import axios from "axios";

const instance = axios.create({
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_STRAPI_KEY,
  },
  params: {
    populate: "*",
  },
});

export default instance;
