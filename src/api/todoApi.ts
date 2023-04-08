import { ICreateToDoReq, IToDoResp, IUpdateToDoReq } from "../types/api";
import api from "./api";

const key = localStorage.getItem("pre-onboarding-key");

export const createTodo = (todo: ICreateToDoReq) => {
  return api.put<IToDoResp>(`/todos/`, todo, {
    headers: {
      Authorization: key,
      "Content-Type": "application/json",
    },
  });
};

export const getTodos = () => {
  console.log(key);
  return api.get<IToDoResp>("/todos", {
    headers: {
      Authorization: key,
    },
  });
};

export const updateTodo = (id: number, todo: IUpdateToDoReq) => {
  return api.put<IToDoResp>(`/todos/${id}`, todo, {
    headers: {
      Authorization: key,
      "Content-Type": "application/json",
    },
  });
};

export const deleteTodo = (id: number) => {
  return api.delete(`/todos/${id}`, {
    headers: {
      Authorization: key,
    },
  });
};
