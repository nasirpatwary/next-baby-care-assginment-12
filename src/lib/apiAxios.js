import axios from "axios";
const baseURL = new URL(process.env.NEXTAUTH_URL).toString();
const apiAxios = axios.create({
  baseURL
});

export default apiAxios;