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
  return api.get<ToDoResp[]>("todos", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const UpdateTodo = (data: TodoType, id: number) => {
  return api.put<ToDoResp>(`todos/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const DeleteTodo = (id: number) => {
  return api.delete(`todos/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
