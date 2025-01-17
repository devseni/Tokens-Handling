import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api-urls",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
