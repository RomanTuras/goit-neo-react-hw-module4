import axios from "axios";

const KEY = "GEzxnXA0U9S83HoR_OM_0jV7uaeBQRhQOHdvrMC63Jw";
const BASE_URL = "https://api.unsplash.com/search/photos";

const getImages = async (query, page = 0, perPage = 20) => {
  return await axios.get(BASE_URL, {
    params: {
      client_id: KEY,
      query: query,
      page: page,
      per_page: perPage,
      orientation: "landscape",
    },
  });
};

export default getImages;
