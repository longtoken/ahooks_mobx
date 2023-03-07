import { notification } from 'antd';
import type { AxiosResponse, AxiosRequestConfig, AxiosHeaders } from 'axios';
import type { Response, ResponseWithPagination } from './interface';

export const notify = (description?: string) => notification.error({
  message: '请求出错',
  style: { wordBreak: 'break-all' },
  description: description
    ? description.length > 100 ? `${description.slice(0, 100)}...` : description
    : '网络繁忙，请稍后再试！',
});

const baseURL = 'http://localhost:3011';

const BaseRequestConfig = {
  timeout: 30000,
  withCredentials: true,
};

export function requestInterceptor(config: AxiosRequestConfig) {
  const {
    method = 'GET', params, ...rest
  } = config;
  const isGetMethod = method.toUpperCase() === 'GET';
  return {
    method,
    ...BaseRequestConfig,
    ...rest,
    headers: {
      ...config.headers
    } as AxiosHeaders,
    baseURL: baseURL,
    ...(isGetMethod ? { params } : { data: params }),
  };
}

export function responseInterceptor(axiosResponse: AxiosResponse<Response<Record<string, unknown>> | ResponseWithPagination<Record<string, unknown>>>) {
  const response = axiosResponse.data;

  switch (response.code) {
    case 401: {
      // custom 跳转登录页或者打开登录弹框
      notify(response.message);
      return axiosResponse;
    }
    default:
      if (response.code !== 200) {
        if (response.message) {
          notify(response.message);
          return axiosResponse;
        }

        notify('服务器出了一些问题！');

        return Object.assign(axiosResponse, { data: null });
      }
      return axiosResponse;
  }
}
