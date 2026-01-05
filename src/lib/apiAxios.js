import axios from "axios";

const apiAxios = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
});

export default apiAxios;