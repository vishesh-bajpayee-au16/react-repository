import axios from "axios";
const KEY = "AIzaSyCpfLg0sWLAD4WADggrNRjxhVTCyA36vVc";

export default axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?",
  params: {
    key: KEY,
  },
});
