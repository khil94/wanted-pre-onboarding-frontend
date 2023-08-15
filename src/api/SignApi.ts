import { SignData, SignInResp } from "../types";
import api from "./Api";

export const PostSignUp = (userData: SignData) => {
  return api.post("auth/signup", userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const PostSignIn = (userData: SignData) => {
  return api.post<SignInResp>("auth/signin", userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
