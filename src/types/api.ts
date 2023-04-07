export interface ISignUpReq {
  email: string;
  password: string;
}
export interface ISignInReq {
  email: string;
  password: string;
}

export interface ISignInResp {
  access_token: string;
}

export interface ICreateToDoReq {
  todo: string;
}

export interface IToDoResp {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface IUpdateToDoReq {
  todo: string;
  isCompleted: boolean;
}
