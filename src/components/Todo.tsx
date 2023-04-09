import { updateTodo } from "../api/todoApi";
import { IToDoResp } from "../types/api";
import { useState } from "react";

interface IProps {
  todo: IToDoResp;
  onDelete: () => void;
}
export default function Todo(props: IProps) {
  const { todo, onDelete } = props;
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted || false);
  const [editMode, setEditMode] = useState(false);
  const [todoVal, setTodoVal] = useState(todo.todo || "");

  const handleComplete = () => {
    updateTodo(todo.id, {
      ...todo,
      isCompleted: !isCompleted,
    });
    setIsCompleted(!isCompleted);
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleCancel = () => {
    setEditMode(false);
    setTodoVal(todo.todo);
  };

  const handleUpdate = () => {
    updateTodo(todo.id, {
      ...todo,
      todo: todoVal,
    });
    todo.todo = todoVal;
    handleEdit();
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          onChange={handleComplete}
          checked={isCompleted}
        />
        {editMode ? (
          <input
            value={todoVal}
            onChange={(e) => {
              setTodoVal(e.target.value);
            }}
          />
        ) : (
          <span>{todo.todo}</span>
        )}
      </label>
      {editMode ? (
        <>
          <button onClick={handleUpdate} data-testid="submit-button">
            제출
          </button>
          <button onClick={handleCancel} data-testid="cancel-button">
            취소
          </button>
        </>
      ) : (
        <>
          <button onClick={handleEdit} data-testid="modify-button">
            수정
          </button>
          <button onClick={onDelete} data-testid="delete-button">
            삭제
          </button>
        </>
      )}
    </li>
  );
}
