// 全局公共接口放这里

import Request from '@utils/request';
import { RequestConfig } from "@utils/request/interface";

export const getUserInfo = <T>(options: RequestConfig) => Request<T>({ ...options });

