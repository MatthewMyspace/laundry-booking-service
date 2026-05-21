import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // local
   //baseURL: '', // live
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
