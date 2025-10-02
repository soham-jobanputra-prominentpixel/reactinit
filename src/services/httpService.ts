import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

interface HttpServiceParams {
  path: string;
  headers?: Record<string, string>;
  baseURL?: string;
}

interface HttpPostService<T> extends HttpServiceParams {
  payload: T;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("[Request]", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("[Request Error]", error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("[Response]", response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error("[Response Error]", error);
    return Promise.reject(error);
  },
);

export async function httpGetService<ApiResponseType>({
  path,
}: HttpServiceParams): Promise<AxiosResponse<ApiResponseType>> {
  return await axiosInstance.get<ApiResponseType>(path);
}

export async function httpPostService<ApiResponseType, RequestType>({
  path,
  payload,
  baseURL,
}: HttpPostService<RequestType>): Promise<AxiosResponse<ApiResponseType>> {
  const config: AxiosRequestConfig = {
    baseURL,
  };
  return await axiosInstance.post<ApiResponseType>(path, payload, config);
}
