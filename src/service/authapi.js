import axios from "axios";

const authApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
    "Content-Type": "application/json",
    },
});

// Add JWT token to every request
authApi.interceptors.request.use(
    (config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
    },
    (error) => {
    return Promise.reject(error);
    }
);

// Handle unauthorized responses
authApi.interceptors.response.use(
    (response) => response,
    (error) => {
    if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
      // Optional:
      // window.location.href = "/login";
    }

    return Promise.reject(error);
    }
);

export default authApi;