import axios from "axios";

const apiAxios = axios.create({
  baseURL: process.env.PUBLIC_URL_SERVER,
});

export default apiAxios;