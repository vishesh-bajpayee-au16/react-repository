import axios from "axios";

const KEY = "AIzaSyBBveiEuZg0wVn7I3KBwJsaAesB0s-1zrM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
