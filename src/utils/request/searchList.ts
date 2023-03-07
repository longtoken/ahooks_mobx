import Request from ".";
import { RequestConfig, ResponseWithPagination } from "./interface";

export const searchListRequest = <T>(options: RequestConfig) => Request<ResponseWithPagination<T>>({ intact: true, ...options }).then((res) => ({
  total: res?.totalCount ?? 0,
  list: res?.data ?? [],
}));