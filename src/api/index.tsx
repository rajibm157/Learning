import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Api = axios.create({
  baseURL: 'https://api.github.com/users/defunkt',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

Api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@Token');
    console.log('Header Token : ', token);
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

Api.interceptors.response.use(
  response => {
    return response.data;
  },
  async error => {
    if (error.status === 401) {
      console.log('Token expire: ', error);
    }
    return Promise.reject(error);
  },
);

export default Api;
