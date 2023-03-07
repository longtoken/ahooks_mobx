import { AxiosRequestConfig } from 'axios';

export interface RequestConfig extends AxiosRequestConfig {
  intact?: boolean;
}

export interface Response<T> {
  data: T;
  code: number;
  message: string;
}

export type ResponseWithPagination<T = boolean> = Response<T> & PaginationWithinResponse;

export interface PaginationWithinResponse {
  page: number;
  pageSize: number;
  totalCount: number;
}
export interface PaginationWithinRequest {
  pageIndex: number;
  pageSize: number;
}
