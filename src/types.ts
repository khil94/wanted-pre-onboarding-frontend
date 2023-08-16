export interface SignData {
  email: string;
  password: string;
}

export interface SignInResp {
  access_token: string;
}

export interface TodoType {
  todo: string;
  isCompleted: boolean;
}

export interface ToDoResp {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
