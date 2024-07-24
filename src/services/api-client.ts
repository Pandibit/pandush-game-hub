import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a10a5aa9f13e4e898c42cdd68fa39912",
  },
});
