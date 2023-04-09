import styled from "@emotion/styled";
import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { IToDoResp } from "../types/api";
import { createTodo, deleteTodo, getTodoList } from "../api/todoApi";
import Todo from "../components/Todo";

export default function Todos() {
  const [todoList, setTodoList] = useState<IToDoResp[]>([]);

  const handleCreateTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = e.currentTarget.elements.namedItem(
      "new-todo"
    ) as HTMLInputElement;
    if (newTodo.value) {
      await createTodo({
        todo: newTodo.value,
      });
      newTodo.value = "";
      getTodoListFunc();
    }
  };

  const getTodoListFunc = async () => {
    const resp = await getTodoList();
    if (resp.status === 200) {
      setTodoList(resp.data);
    }
  };

  useEffect(() => {
    getTodoListFunc();
  }, []);

  return (
    <Container>
      <h1>ToDos</h1>
      <div>
        <form onSubmit={(e) => handleCreateTodo(e)}>
          <label htmlFor="new-todo-input">Todo 생성</label>
          <input
            id="new-todo-input"
            data-testid="new-todo-input"
            name="new-todo"
            placeholder="New Todo"
          />
          <button type="submit" data-testid="new-todo-add-button">
            추가
          </button>
        </form>
      </div>
      <ul>
        {todoList.map((todo, i) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={() => {
                deleteTodo(todo.id);
                setTodoList(todoList.filter((v) => v.id !== todo.id));
              }}
            />
          );
        })}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
