import { slidesResponse } from "../types/slide";
import axios from "./axios";

const getSliders = async () => {
  const resp = await axios.get(import.meta.env.VITE_STRAPI_URL + "/sliders");

  return resp.data as slidesResponse;
};

export default getSliders;
