import styled from "@emotion/styled";
import { useState } from "react";
import { TodoType } from "../types";

interface IProp {
  todo: TodoType;
}

export default function Todo({ todo }: IProp) {
  const [content, setContent] = useState(todo.todo);
  const [checked, setChecked] = useState(todo.isCompleted);
  const [editMode, setEditMode] = useState(false);

  return (
    <Container>
      {editMode ? (
        <></>
      ) : (
        <>
          <Label>
            <input
              type="checkbox"
              checked={checked}
              onClick={(e) => setChecked(!checked)}
            />
            <span>{content}</span>
          </Label>
          <Btn onClick={() => setEditMode(true)} data-testid="modify-button">
            수정
          </Btn>
          <Btn data-testid="delete-button">삭제</Btn>
        </>
      )}
    </Container>
  );
}

const Container = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
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
  justify-content: space-between;
  margin-top: 24px;
`;

const Btn = styled.button`
  padding: 8px;
  border-radius: 8px;
  width: 45%;
  border-width: 1px;
`;
