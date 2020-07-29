import axios from "axios";

const token = JSON.parse(sessionStorage.getItem("simepUser"))?.token;

const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
