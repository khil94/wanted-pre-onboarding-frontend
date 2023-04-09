import { ICreateToDoReq, IToDoResp, IUpdateToDoReq } from "../types/api";
import api from "./api";

export const createTodo = (todo: ICreateToDoReq) => {
  const key = localStorage.getItem("pre-onboarding-key");

  return api.post<IToDoResp>(`/todos/`, todo, {
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  });
};

export const getTodoList = () => {
  const key = localStorage.getItem("pre-onboarding-key");
  return api.get<IToDoResp[]>("/todos", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
};

export const updateTodo = (id: number, todo: IUpdateToDoReq) => {
  const key = localStorage.getItem("pre-onboarding-key");

  return api.put<IToDoResp>(`/todos/${id}`, todo, {
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  });
};

export const deleteTodo = (id: number) => {
  const key = localStorage.getItem("pre-onboarding-key");

  return api.delete(`/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
};
