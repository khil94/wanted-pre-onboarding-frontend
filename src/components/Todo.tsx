import styled from "@emotion/styled";
import { useState } from "react";
import { UpdateTodo } from "../api/TodoApi";
import { ToDoResp, TodoType } from "../types";

interface IProp {
  todo: ToDoResp;
  onDelete: () => void;
}

export default function Todo({ todo, onDelete }: IProp) {
  const [content, setContent] = useState(todo.todo);
  const [checked, setChecked] = useState(todo.isCompleted);
  const [editMode, setEditMode] = useState(false);

  const onUpdate = (newContent: string, newChecked: boolean) => {
    const newTodo = { todo: newContent, isCompleted: newChecked } as TodoType;
    UpdateTodo(newTodo, todo.id);
  };

  return (
    <Container>
      {editMode ? (
        <>
          <Label>
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Label>
          <Btn
            onClick={() => {
              onUpdate(content, checked);
              setEditMode(false);
            }}
            data-testid="submit-button"
          >
            제출
          </Btn>
          <Btn
            onClick={() => {
              setEditMode(false);
              setContent(todo.todo);
            }}
            data-testid="cancel-button"
          >
            취소
          </Btn>
        </>
      ) : (
        <>
          <Label>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => {
                setChecked(!checked);
                onUpdate(content, !checked);
              }}
            />
            <span>{content}</span>
          </Label>
          <Btn onClick={() => setEditMode(true)} data-testid="modify-button">
            수정
          </Btn>
          <Btn onClick={onDelete} data-testid="delete-button">
            삭제
          </Btn>
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
