import axios from 'axios';

export const API_ADMIN  = axios.create({ baseURL: "http://localhost:3000" });

API_ADMIN.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

API_ADMIN.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem("adminToken");
      window.location.href = "/admin/signin";
    }
    return Promise.reject(error);
  }
);


