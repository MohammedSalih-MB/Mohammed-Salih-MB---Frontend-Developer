import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});

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
