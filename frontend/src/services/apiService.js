import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  config => {
    const token = process.env.API_TOKEN;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

const request = (options) => {
  const onSuccess = (response) => response.data;

  const onError = (error) => {
    return Promise.reject(error.response ? error.response.data : error.message);
  };

  return axiosInstance(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
