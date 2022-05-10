import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

const request = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

//添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // let token = localStorage.getItem('cms-token');
    // if (token) {
    //   config.headers = {
    //     'cms-token': token,
    //   };
    // }
    return config;
  },
  (err) => {
    // 对请求错误做些什么
    return Promise.reject(err);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (res) => {
    // 对响应数据做点什么
    return res.data;
  },
  (err) => {
    // 对响应错误做点什么
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误');
          break;
        case 401:
          console.log('未授权访问');
          break;
        default:
          console.log('其他错误信息');
      }
    }
    return Promise.reject(err);
  }
);

export default request;
