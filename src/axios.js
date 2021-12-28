import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});

instance.interceptors.request.use((config) => {
  console.log(config);
  return config;
}, (error) => Promise.reject(error));

instance.interceptors.response.use((response) => {
  console.log(response);
}, (error) => Promise.reject(error));

export default instance;
