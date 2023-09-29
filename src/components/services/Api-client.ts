import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "588941c3b44c433a92ba2d79c50a6986"
  }
})