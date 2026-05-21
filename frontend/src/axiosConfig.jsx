import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '', // local
   //baseURL: '', // live
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
