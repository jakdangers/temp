import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://34.64.37.201:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use(
// async (config) => {
// const token = await AsyncStorage.getItem('authToken');
// if (token) {
//   config.headers.Authorization = `Bearer ${token}`;
// }
// return config;
// },
// (error) => Promise.reject(error),
// );

export default axiosInstance;
