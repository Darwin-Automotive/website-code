import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/da-preorder/us-central1/api",
});

export default instance;
