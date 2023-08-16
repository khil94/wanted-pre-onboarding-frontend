import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { CreateTodo, DeleteTodo, GetTodos } from "../api/TodoApi";
import Todo from "../components/Todo";
import { ToDoResp } from "../types";

export default function TodoPage() {
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState<ToDoResp[]>([]);

  const getTodoList = async () => {
    const resp = await GetTodos();
    setTodoList(resp.data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const onCreate = async () => {
    const resp = await CreateTodo(content);
    setTodoList([...todoList, resp.data]);
  };

  return (
    <Container>
      <FormWrapper>
        <Form>
          <Label htmlFor="todo-input">Todo입력</Label>
          <Input
            onChange={(e) => setContent(e.target.value)}
            value={content}
            data-testid="new-todo-input"
            type="text"
          ></Input>
          <Btn
            onClick={(e) => {
              e.preventDefault();
              if (content) {
                onCreate();
              }
              setContent("");
            }}
            data-testid="new-todo-add-button"
            type="submit"
          >
            추가
          </Btn>
        </Form>
      </FormWrapper>
      <ul>
        {todoList.map((v) => (
          <Todo
            key={v.id}
            todo={v}
            onDelete={() => {
              DeleteTodo(v.id);
              setTodoList(todoList.filter((t) => v.id !== t.id));
            }}
          />
        ))}
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

const FormWrapper = styled.div`
  width: 50%;
`;

const Form = styled.form`
  padding: 12px;
  display: flex;
  flex-direction: row;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
`;

const Btn = styled.button`
  padding: 8px;
  border-radius: 8px;
  border-width: 1px;
`;
