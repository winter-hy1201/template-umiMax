// import { Loading } from '@/components/Loading';
import { getToken } from '@/utils/auth/index';
import { message as antMessage } from 'antd';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

export interface AxiosRequest extends AxiosRequestConfig {
  loading?: boolean;
  requestService?: string;
}

export interface RequestResponse<T> {
  data: T;
  result: T;
  code: number;
  message: string;
  success: boolean;
}

// let instance: AxiosInstance | undefined;

// 创建axios实例
const instance = axios.create({
  timeout: 10000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers['Authorization'] = getToken();

    // const { loading: isLoading = false } = config as AxiosRequest;

    // isLoading && Loading.show();

    return config;
  },
  (error) => {
    // Loading.hide();

    return Promise.reject(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  // @ts-ignore
  (response: AxiosResponse<RequestResponse<T>>) => {
    // Loading.hide();

    const { data: responseData } = response;
    const { code, success, message, result: data } = responseData;

    const $success = code === 200 && success;

    if (!$success) {
      antMessage.error(message);
    }

    return { code, success: $success, data, message };
  },
  (error: AxiosError) => {
    const { code, message } = error;

    // Loading.hide();
    void antMessage.error(message);

    return { code, success: false, message };
  },
);

export default instance;
