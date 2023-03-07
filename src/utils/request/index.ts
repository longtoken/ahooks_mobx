import { notification } from "antd";
import Axios, { AxiosResponse } from "axios";
import { RequestConfig, Response } from "./interface";
import {requestInterceptor, responseInterceptor} from './interceptor';

Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Axios.interceptors.request.use(requestInterceptor);
Axios.interceptors.response.use(responseInterceptor);

const defaultOpts = {
  timeout: 8000,
  withCredentials: true,
  baseURL: 'http://localhost:3011'
};

const Request = async <T>(option: RequestConfig) => {  
  return Axios({
    ...defaultOpts,
    ...option
  })
    .then((response: AxiosResponse<T>) => {      
      return option.intact ? response?.data : ((response?.data as unknown) as Response<T>)?.data || null;
    })
    .catch((error) => {
      console.error(error);
      
      notification.error({
        message: '请求出错',
        description: '网络繁忙，请稍后再试！',
      });
      return null;
    });
};

export default Request;