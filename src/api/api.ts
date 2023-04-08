import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  (config) => {
    console.log("request : ", config);
    return config;
  },
  (error) => {
    console.log("Request Error : ", error);
  }
);

api.interceptors.response.use(
  (resp: AxiosResponse<any, any>) => {
    console.log("Response", resp);

    return { status: resp?.status, data: resp.data } as AxiosResponse<any, any>;
  },
  (error) => {
    console.log("Response Error : ", error);
  }
);

export default api;
