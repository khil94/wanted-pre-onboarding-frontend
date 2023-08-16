import styled from "@emotion/styled";
import { useState } from "react";
import Todo from "../components/Todo";

export default function TodoPage() {
  const [content, setContent] = useState("");

  return (
    <Container>
      <FormWrapper>
        <Label htmlFor="todo-input">Todo입력</Label>
        <Input
          onChange={(e) => setContent(e.target.value)}
          data-testid="new-todo-input"
          type="text"
        ></Input>
        <Btn data-testid="new-todo-add-button" type="button">
          추가
        </Btn>
      </FormWrapper>
      <ul>
        <Todo
          todo={{
            todo: "test",
            isCompleted: false,
          }}
        />
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
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
`;

const ErrorText = styled.span`
  color: red;
  font-weight: bold;
  margin: 4px 0 4px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 24px;
`;

const Btn = styled.button`
  padding: 8px;
  border-radius: 8px;
  width: 45%;
  border-width: 1px;
`;
