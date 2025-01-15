import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3002/',
  timeout: 5000, // Set a timeout
});

export default axiosInstance;
