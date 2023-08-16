import { ToDoResp, TodoType } from "../types";
import api from "./Api";

export const CreateTodo = (todo: string) => {
  const key = localStorage.getItem("ACCESS_TOKEN");
  return api.post<ToDoResp>(
    "todos",
    { todo: todo },
    {
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const GetTodos = () => {
  const key = localStorage.getItem("ACCESS_TOKEN");

  return api.get<ToDoResp[]>("todos", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
};

export const UpdateTodo = (data: TodoType, id: number) => {
  const key = localStorage.getItem("ACCESS_TOKEN");

  return api.put<ToDoResp>(`todos/${id}`, data, {
    headers: {
      Authorization: `Bearer ${key}`,

      "Content-Type": "application/json",
    },
  });
};

export const DeleteTodo = (id: number) => {
  const key = localStorage.getItem("ACCESS_TOKEN");

  return api.delete(`todos/${id}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
};
