export interface SignData {
  email: string;
  password: string;
}

export interface SignInResp {
  access_token: string;
}

export interface TodoType {
  content: string;
  checked: boolean;
}
