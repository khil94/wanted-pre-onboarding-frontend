import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
});

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
