import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IToDoResp } from "../types/api";
import { getTodoList } from "../api/todoApi";
import Todo from "../components/Todo";

export default function Todos() {
  const [todoList, setTodoList] = useState<IToDoResp[]>([]);

  useEffect(() => {
    const getTodoListFunc = async () => {
      const resp = await getTodoList();
      if (resp.status === 200) {
        setTodoList(resp.data);
      }
    };
    getTodoListFunc();
  }, []);

  return (
    <Container>
      <ul>
        {todoList.map((todo, i) => {
          return <Todo todo={todo} />;
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
