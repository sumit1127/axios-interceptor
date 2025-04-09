import axios from "axios";

// axios instance
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

//request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authtoken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    console.log("request intercepted", config);
    return config;
  },
  (error) => {
    console.log(error);
    return Propmise.reject(error);
  }
);

//response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      console.log("Unauthorized access");
    } else if (status === 404) {
      console.log("Post not found");
    } else {
      console.log("An Error occurred ", error);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
