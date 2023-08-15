import axios from "axios";

const api = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
});

export default api;
