import { ISignInResp, ISignUpReq } from "../types/api";
import api from "./api";

export const PostSignUp = (userData: ISignUpReq) => {
  console.log(process.env.REACT_APP_API_URL);
  return api.post("/auth/signup", userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const PostSignIn = (userData: ISignUpReq) => {
  return api.post<ISignInResp>("/auth/signin", userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
